module.exports = {

  initialize: () => {
    // Used in inter-app communication
    // SocketListener = require('../lib/socket_listener');

    // Routing management
    const Router = require('router');
    this.router = new Router();
    Backbone.history.start();

    // Makes this object immuable.
    if (typeof Object.freeze === 'function') {
      Object.freeze(this);
    }
  },
};
