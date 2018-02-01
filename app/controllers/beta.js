import Controller from '@ember/controller';
import ProjectsMixin from '../mixins/projects';

export default Controller.extend(ProjectsMixin, {
  channel: 'beta',
  includeReleasesInFileList: true,
  channelDescription: 'The master branch of Ember and Ember Data are promoted to beta every six weeks. Roughly each week, a new beta release is provided for evaluation. After six of these beta releases, a stable release is declared.'
});
