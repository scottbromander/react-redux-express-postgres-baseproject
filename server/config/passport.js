const passport = require('passport');

passport.serializeUser((user, done) => {
  console.log('serializing user: ', user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const result = await pool.query('SELECT * FROM "user" WHERE id = $1;', [
      id,
    ]);

    const user = result.rows?.[0];
    if (user) {
      done(null, user);
    } else {
      done(null, null);
    }
  } catch (err) {
    console.log(`Error with query during deserializing user: ${err}`);
    done(err, null);
  }
});

// MOUNT AUTH SOLUTIONS HERE

module.exports = passport;
