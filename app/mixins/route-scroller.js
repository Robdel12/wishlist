import Ember from 'ember';

export default Ember.Mixin.create({
  activate() {
    this._super.apply(this, arguments);

    window.scrollTo(0, 0);
  },
});
