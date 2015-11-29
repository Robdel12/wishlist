import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['price'],
  price: 'asc',
  sortPriceInfelction: Ember.computed('price', function() {
    if(this.get('price') === 'asc') {
      return "High to low"
    } else {
      return "Low to high"
    }
  }),
  sortProperties: Ember.computed('price', function() {
    return [`price:${this.get('price')}`];
  }),
  // sortedModel: Ember.computed.alias('model'),
  sortedModel: Ember.computed.sort('model', 'sortProperties'),

  actions: {
    priceSort() {
      if(this.get('price') === "desc") {
        this.set('price', 'asc');
      } else {
        this.set('price', 'desc')
      }
    }
  }
});
