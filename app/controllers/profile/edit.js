import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateProfile() {
      this.model.save();
    }
  }
});
