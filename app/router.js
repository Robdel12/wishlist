import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route('wishlist', { path: '/w' }, function() {
    this.route('show', { path: ':id' });
    this.route('new');
  });

  this.route('allwishes');

  this.route('profile', { path: '/u' }, function() {
    this.route('show', { path: ':id' });
    this.route('edit');
  });
});

export default Router;
