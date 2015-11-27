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
            this.get('session').set('content.userRecordID', registerdUser.get('id'));
            isNewUser = false;
          }
        });

        // console.log(isNewUser);
        if(isNewUser) {
          console.log('create new user');
          this.newUser = this.store.createRecord('user', {
            id: registeringUID,
            uid: user.uid,
            displayName: user.currentUser.displayName,
            userName: user.currentUser.userName,
            profileImageURL: user.currentUser.profileImageURL
          });
          // console.log('about to save the user');
          this.get('session').set('content.userRecordID', this.newUser.get('id'));
          this.newUser.save();
        }
      });

    },
    signOut: function() {
      this.get("session").close();
    }
  }
});
