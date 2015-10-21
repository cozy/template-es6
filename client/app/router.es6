const AppView = require('views/app_view');

module.exports = class Router extends Backbone.Router {
    routes: {
        '': 'main',
    }

    main() {
      const mainView = new AppView();
      mainView.render();
    }
};
