import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: '/builds'
});

Router.map(function() {
  this.route('release');
  this.route('beta');
  this.route('canary');
  this.route('tagged');
});

export default Router;
