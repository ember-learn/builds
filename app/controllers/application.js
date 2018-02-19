import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  isIndexActive: computed('currentRouteName', function() {
    return this.isActiveChannel('index');
  }),

  isTaggedActive: computed('currentRouteName', function() {
    return this.isActiveChannel('tagged');
  }),

  isChannelsActive: computed('currentRouteName', function() {
    return !['index','tagged'].some(name => name === this.currentRouteName);
  }),

  isReleaseActive: computed('currentRouteName', function() {
    return this.isActiveChannel('release');
  }),

  isBetaActive: computed('currentRouteName', function() {
    return this.isActiveChannel('beta');
  }),

  isCanaryActive: computed('currentRouteName', function() {
    return this.isActiveChannel('canary');
  }),

  isActiveChannel(channel) {
    return this.currentRouteName.includes(channel);
  }
});
