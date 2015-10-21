module.exports = class BaseView extends Backbone.View {
  constructor() {
    super();
  }

  template() {}

  getRenderData() {
    return { model: this.model.toJSON() };
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
};
