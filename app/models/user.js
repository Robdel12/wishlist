import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  displayName: DS.attr('string'),
  userName: DS.attr('string'),
  profileImageURL: DS.attr('string'),
  shoeSize: DS.attr('string'),
  pantSize: DS.attr('string'),
  hatSize: DS.attr('string'),
  shirtSize: DS.attr('string')
});
