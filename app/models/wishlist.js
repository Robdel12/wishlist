import DS from 'ember-data';

export default DS.Model.extend({
  submittedBy: DS.attr('string'),
  submittedByDisplayName: DS.attr('string'),
  itemName: DS.attr('string'),
  itemURL: DS.attr('string'),
  storeName: DS.attr('string'),
  price: DS.attr('string'),
  description: DS.attr('string'),
  imgURL: DS.attr('string'),
  quantity: DS.attr('string', { defaultValue: "1" }),
  isPurchased: DS.attr('boolean', { defaultValue: false })
});
