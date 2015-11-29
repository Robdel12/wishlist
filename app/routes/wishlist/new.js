import Ember from 'ember';

export default Ember.Route.extend({
  deactivate() {
    this._super.apply(this, arguments);
    let controller = this.controllerFor('wishlist.new');

    controller.setProperties({
      itemName: null,
      imgURL: null,
      price: null,
      description: null,
      itemURL: null,
      nameOfStore: null,
      submittedBy: null,
      quantity: null,
      validURL: false,
      submittedByDisplayName: null
    });
  }
});
