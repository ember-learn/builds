import Controller from '@ember/controller';
import ProjectsMixin from '../mixins/projects';

export default Controller.extend(ProjectsMixin, {
  channel: 'canary',
  channelDescription: 'Canary releases are generated from each commit to the master branch of Ember and Ember Data. These builds are not suitable for use in production, and may contain unstable features disabled behind a flag.'
});
