import DS from 'ember-data';

export default DS.Model.extend({
  submittedBy: DS.attr('string'),
  submittedByDisplayName: DS.attr('string'),
  itemName: DS.attr('string'),
  itemURL: DS.attr('string'),
  storeName: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  imgURL: DS.attr('string'),
  quantity: DS.attr('string', { defaultValue: "1" }),
  isPurchased: DS.attr('boolean', { defaultValue: false }),
  totalPrice: Ember.computed('quantity', 'price', function() {
    let price = parseInt(this.get('price'), 10);
    let quantity = parseInt(this.get('quantity'), 10) || 1;

    return price * quantity;
  })
});
