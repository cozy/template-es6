const BaseView = require('../lib/base_view');

module.exports = class AppView extends BaseView {
  el: 'body.application'
  template() {
    return require('./templates/home');
  }

  afterRender() {
    console.log('write more code here !');
  }
};
