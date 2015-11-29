import Ember from 'ember';
import ScrollReset from '../../mixins/route-scroller'

export default Ember.Route.extend(ScrollReset, {
  model(params) {
    return this.store.findRecord('user', params.id);
  },

  setupController(controller) {
    this._super.apply(this, arguments);

    controller.set('allWishes', this.store.findAll('wishlist'));
  }
});
