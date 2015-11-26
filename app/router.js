import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('wishlist', { path: '/w' }, function() {
    this.route('show', { path: ':id' });
    this.route('new');
  });
  this.route('filter');
});

export default Router;
