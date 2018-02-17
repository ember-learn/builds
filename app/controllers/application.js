import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  isIndexActive: computed('currentRouteName', function() {
    return this.isActiveChannel('index');
  }),

  isChannelsActive: computed('currentRouteName', function() {
    return !['index','tagged'].some(name => name === this.currentRouteName);
  }),

  isActiveChannel(channel) {
    return this.currentRouteName.includes(channel);
  }
});
