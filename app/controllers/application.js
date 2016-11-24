import Ember from 'ember';

export default Ember.Controller.extend({
  isIndexActive: Ember.computed('currentRouteName', function() {
    return this.isActiveChannel('index');
  }),

  isTaggedActive: Ember.computed('currentRouteName', function() {
    return this.isActiveChannel('tagged');
  }),

  isChannelsActive: Ember.computed('currentRouteName', function() {
    var self = this;
    return !['index','tagged'].some(function(name) {
      return name === self.get('currentRouteName');
    });
  }),

  isReleaseActive: Ember.computed('currentRouteName', function() {
    return this.isActiveChannel('release');
  }),

  isBetaActive: Ember.computed('currentRouteName', function() {
    return this.isActiveChannel('beta');
  }),

  isCanaryActive: Ember.computed('currentRouteName', function() {
    return this.isActiveChannel('canary');
  }),

  isActiveChannel(channel) {
    return this.get('currentRouteName').indexOf(channel) !== -1;
  }
});
