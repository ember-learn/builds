import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.reopen({
  didTransition() {
    this._super();

    var url = this.get('url');

    // Add a slash if neccesary
    if (!/^\//.test(url)){ url = '/' + url; }

    // _gaq.push(['_trackPageview', '/builds' + url]);
  }
});

Router.map(function() {
  this.route('release');
  this.route('beta');
  this.route('canary');
  this.route('tagged');
});

export default Router;
