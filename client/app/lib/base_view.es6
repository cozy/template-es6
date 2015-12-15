
export default class BaseView extends Backbone.View {

  template() {
    return '';
  }

  getRenderData() {
    return { model: JSON.stringify(this.model) };
  }

  render() {
    this.beforeRender();
    this.$el.html(this.template(this.getRenderData()));
    this.afterRender();
    return this;
  }

  beforeRender() {}

  afterRender() {}

  destroy() {
    this.undelegateEvents();
    this.$el.removeData().unbind();
    this.remove();
    Backbone.View.prototype.remove.call(this);
  }
}
