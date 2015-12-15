/* eslint new-cap:0 */
import BaseView from 'lib/base_view';

// View that display a collection of subitems
// used to DRY views
// Usage : new ViewCollection(collection:collection)
// Automatically populate itself by creating a itemView for each item
// in its collection

// can use a template that will be displayed alongside the itemViews

// itemView       : the Backbone.View to be used for items
// itemViewOptions : the options that will be passed to itemViews
// collectionEl : the DOM element's selector where the itemViews will
//                be displayed. Automatically falls back to el if null

export default class ViewCollection extends BaseView {
  // bind listeners to the collection
  constructor() {
    super();
    this.itemview = {};

    this.views = {};
    this.views = {};
    this.listenTo(this.collection, 'reset', this.onReset);
    this.listenTo(this.collection, 'add', this.addItem);
    this.listenTo(this.collection, 'remove', this.removeItem);
  }

  template() {
    return '';
  }

  itemViewOptions() {}

  collectionEl: {}

  // add 'empty' class to view when there is no subview
  onChange() {
    this.$el.toggleClass('empty', _.size(this.views) === 0);
  }

  // can be overriden if we want to place the subviews somewhere else
  appendView(view) {
    this.$collectionEl.append(view.el);
  }

  // if we have views before a render call, we detach them
  render() {
    for (const view of this.views) {
      view.$el.detach();
    }
    super.render();
  }

  // after render, we reattach the views
  afterRender() {
    this.$collectionEl = $(this.collectionEl);
    for (const view of this.views) {
      this.appendView(view.$el);
    }
    this.onReset(this.collection);
    this.onChange(this.views);
  }

  // destroy all sub views before remove
  remove() {
    this.onReset([]);
    super.remove();
  }

  // event listener for reset
  onReset(newcollection) {
    for (const view of this.views) {
      view.remove();
    }
    newcollection.forEach(this.addItem);
  }

  // event listeners for add
  addItem(model) {
    const options = _.extend({}, { model: model },
                             this.itemViewOptions(model));
    const view = new this.itemview(options);
    this.views[model.cid] = view.render();
    this.appendView(view);
    this.onChange(this.views);
  }

  // event listeners for remove
  removeItem(model) {
    this.views[model.cid].remove();
    delete this.views[model.cid];
    this.onChange(this.views);
  }
}
