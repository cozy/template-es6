// See cozy-fixtures documentation for testing on
// https://github.com/cozy/cozy-fixtures#automatic-tests
const fixtures = require('cozy-fixtures');

let app = null;
const helpers = {};

// server management
helpers.options = {};
helpers.app = null;

helpers.startApp = (done) => {
  const americano = require('americano');

  const options = {
    name: 'template',
    host: helpers.options.serverHost || '127.0.0.1',
    port: helpers.options.serverPort || 9250,
  };

  americano.start(options, (_err, _app, _server) => {
    app = _app;
    app.server = _server;
    done();
  });
};

helpers.stopApp = (done) => {
  app.server.close(done);
};

// database helper
helpers.cleanDB = (done) => {
  fixtures.resetDatabase({ callback: done });
};
helpers.cleanDBWithRequests = (done) => {
  fixtures.resetDatabase({ removeAllRequests: true, callback: done });
};

module.exports = helpers;
