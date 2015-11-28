import Ember from 'ember';

export default Ember.Controller.extend({
  usersWishes: Ember.computed('allWishes.[]', function() {
    let session = this.get('model.id');

    return this.store.peekAll('wishlist').filter((wishlist) => {
      if(wishlist.get('submittedBy') === session) {
        return wishlist;
      }
    });
  })
});
