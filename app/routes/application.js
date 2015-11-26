import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  afterModel() {
    this.set('allUsers', this.store.findAll('user'));
  },

  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", { provider: provider }).then((user) => {
        let registeringUID = user.uid.split(':')[1];
        let isNewUser = true;

        this.store.peekAll('user').filter((registerdUser) => {
          if(registerdUser.get('uid') === registeringUID) {
            console.log('user exists');
            isNewUser = false;
          }
        });

        // console.log(isNewUser);

        if(isNewUser) {
          console.log('create new user');
          let newUser = this.store.createRecord('user', {
            uid: registeringUID,
            displayName: user.currentUser.displayName,
            userName: user.currentUser.userName
          });
          // console.log('about to save the user');
          newUser.save();
        }

      });
    },
    signOut: function() {
      this.get("session").close();
    }
  }
});
