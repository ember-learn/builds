import Ember from 'ember';
import ProjectsMixin from 'builds/mixins/projects';

export default Ember.Controller.extend(ProjectsMixin, {
  channel: 'beta',
  includeReleasesInFileList: true,
  channelDescription: 'The master branch of Ember and Ember-Data is promoted to beta every six weeks. Roughly each week, a new beta release is provided for evaluation. After six of these beta releases, a stable release is declared.'
});
