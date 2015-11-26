import Ember from 'ember';

export default Ember.Controller.extend({
  usersWishlists: Ember.computed('model.[]', function() {
    let session = this.get('session.currentUser.id');

    return this.store.peekAll('wishlist').filter((wishlist) => {
      if(wishlist.get('submittedBy') === session) {
        return wishlist;
      }
    });
  })
});
