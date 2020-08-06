const app = require('./app');

const server = app.listen(app.get('port'), () => {
  console.log(
    `App is running on port: ${app.get('port')} in ${app.get('env')} mode.`
  );
  console.log(`Press CTRL-C to stop\n`);
});

module.exports = server;
