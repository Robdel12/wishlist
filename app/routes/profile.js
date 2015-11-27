import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log(this.get('session.content'), this.get('session.currentUser.id'));
    return this.store.findRecord('user', this.get('session.currentUser.id'));
  }
});
