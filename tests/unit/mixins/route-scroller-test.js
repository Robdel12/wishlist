/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import RouteScrollerMixin from 'wishlist/mixins/route-scroller';

describe('RouteScrollerMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    var RouteScrollerObject = Ember.Object.extend(RouteScrollerMixin);
    var subject = RouteScrollerObject.create();
    expect(subject).to.be.ok;
  });
});
