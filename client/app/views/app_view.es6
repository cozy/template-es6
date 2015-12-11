import BaseView from '../lib/base_view'
import template from './templates/home'

export default class AppView extends BaseView {

  constructor () {
    super();

  /*
   * $el is define in the superclass constructor and is based on "el" attribute
   * set on the childs. As the superclass constructor is called first it is
   * impossible to let the parent set "el".
   */
    this.$el = $('body.application');

    this.model = {};

    this.template = template;
  }

  afterRender () {
    console.log('write more code here !');
  }
};
