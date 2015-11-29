import Ember from 'ember';
import ScrollReset from '../../mixins/route-scroller'

export default Ember.Route.extend(ScrollReset, {
  model(params) {
    return this.store.find('wishlist', params.id);
  }
});
