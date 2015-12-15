import AppView from 'views/app_view';

export default class Router extends Backbone.Router {

  get routes() {
    return {
      '': 'main',
    };
  }

  main() {
    const mainView = new AppView();
    mainView.render();
  }
}
