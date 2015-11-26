import Ember from 'ember';

export default Ember.Controller.extend({
  showEditForm: false,
  ownedWishedItem: Ember.computed('session.currentUser', function() {
    console.log(this.get('model.submittedBy'), this.get('session.currentUser.id'), this.get('model.submittedBy') === this.get('session.currentUser.id'));
    if(this.get('model.submittedBy') === this.get('session.currentUser.id')) {
      return true;
    } else {
      return false;
    }
  }),
  actions: {

    toggleEditForm() {
      this.toggleProperty('showEditForm');
    },

    deleteWishlist() {
      this.get('model').destroyRecord().then(() => {
        this.transitionTo('index');
      });
    },

    saveChanges() {
      this.get('model').save().then(() => {
        this.set('showEditForm', false);
      });
    }
  }
});
