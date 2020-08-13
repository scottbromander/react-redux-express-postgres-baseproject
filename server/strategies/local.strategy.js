const LocalStrategy = require('passport-local').Strategy;
const encryptLib = require('../modules/encryption');

const localStrategyCallback = async (email, password, done) => {
  try {
    const result = await pool.query(
      `SELECT * FROM "user" 
          JOIN "login" ON "login"."user_id"="user"."id"
          WHERE "user"."email" = $1;`,
      [email]
    );

    const user = result?.rows?.[0];

    if (user && encryptLib.comparePassword(password, user.password)) {
      done(null, user);
    } else {
      done(null, null);
    }
  } catch (err) {
    console.log('Error with query for user ', err);
    done(err, null);
  }
};

module.exports = (passport) => {
  passport.use('local', new LocalStrategy(localStrategyCallback));
};
