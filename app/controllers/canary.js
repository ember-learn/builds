import Ember from 'ember';
import ProjectsMixin from 'builds/mixins/projects';

export default Ember.Controller.extend(ProjectsMixin, {
  channel: 'canary',
  channelDescription: 'Canary builds are generated from each commit to the master branch of Ember and Ember-Data. These builds are not suitable for use in production, and may contain unstable features disabled behind a flag.'
});
