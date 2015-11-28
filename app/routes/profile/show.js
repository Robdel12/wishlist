import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.id);
  },

  setupController(controller) {
    this._super.apply(this, arguments);

    controller.set('allWishes', this.store.findAll('wishlist'));
  }
});
