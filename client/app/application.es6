import Router from 'router'

export default class app {

  constructor () {

    // Routing management
    this.router = new Router();
    Backbone.history.start();

    // Makes this object immuable.
    if (typeof Object.freeze === 'function') {
      Object.freeze(this);
    }
  }
}
