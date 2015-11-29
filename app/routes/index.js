import Ember from 'ember';
import ScrollReset from '../mixins/route-scroller'

export default Ember.Route.extend(ScrollReset, {
  model() {
    return this.store.findAll('wishlist');
  }
});
