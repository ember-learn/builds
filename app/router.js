import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.reopen({
  didTransition() {
    this._super();

    let url = this.get('url');

    // Add a slash if neccesary
    if (!/^\//.test(url)){ url = '/' + url; }

    // _gaq.push(['_trackPageview', '/builds' + url]);
  }
});

Router.map(function() {
  this.route('lts');
  this.route('release');
  this.route('beta');
  this.route('canary');
  this.route('tagged');
});

export default Router;
