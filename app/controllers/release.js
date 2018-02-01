import Controller from '@ember/controller';
import ProjectsMixin from '../mixins/projects';

export default Controller.extend(ProjectsMixin, {
  channel: 'release',
  includeReleasesInFileList: true,
  channelDescription: 'Releases are production-ready versions of Ember and Ember Data that have been through a six-week beta cycle.'
});
