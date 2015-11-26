import Ember from 'ember';

export default Ember.Controller.extend({
  validURL: false,
  validateURL(textval) {
    console.log("textval = ", textval);
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    console.log("urlregex.test = ", urlregex.test(textval));
    return urlregex.test(textval);
  },
  queryLink: Ember.observer('itemURL', function() {
    let q = this.get('itemURL');
    let _this = this;

    if(this.validateURL(q)) {
      this.set('validURL', true);

      let deferred = Ember.$.embedly.extract(q, {
        key: 'f20e2982b7704d49a1bab940400f9016',
        query: {
          words: 20,
        }
      }).progress(function(data) {
        // Called after each URL has been returned from the Embedly server. Order
        // is not preserved for this method, so for long lists where URLs need to
        // be batched the data results will likely be out of order.
        _this.set('itemName', data.title);
        _this.set('nameOfStore', data.provider_name);
        _this.set('imgURL', data.images[0].url); //todo carosel throug the avail ones
      });
    }
  }),
  actions: {
    createNewItem() {
      console.log(this.get('imgURL'));
      var newWishlist = this.store.createRecord('wishlist', {
        itemName: this.get('itemName'),
        imgURL: this.get('imgURL'),
        price: this.get('price'),
        description: this.get('description'),
        itemURL: this.get('itemURL'),
        storeName: this.get('storeName'),
        submittedBy: this.get('session.currentUser.id'),
        submittedByDisplayName: this.get('session.currentUser.displayName')
      });

      newWishlist.save().then(() => {
        this.setProperties({
          itemName: null,
          imgURL: null,
          price: null,
          description: null,
          itemURL: null,
          storeName: null,
          submittedBy: null,
          submittedByDisplayName: null
        });
        this.set('validURL', false);
        this.transitionTo('index');
      });
    }
  }
})
