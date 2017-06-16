import Ember from 'ember';
import ProjectsMixin from '../mixins/projects';

export default Ember.Controller.extend(ProjectsMixin, {
  isIndexController: true,
  channel: 'beta',
  includeReleasesInFileList: true,
  channelDescription: 'Release builds are production-ready versions of Ember and Ember-Data that have been through a six-week beta cycle.',

  latestVersionOfDocs: Ember.computed('model.release.lastRelease', function() {
    let release = this.get('model.release.lastRelease');
    let [major, minor] = release.split('.');

    return `${major}.${minor}.0`;
  }),

  emberBetaProject: Ember.computed('projects.@each.isEmberBeta', function() {
    return this.get('projects').find(p => p.isEmberBeta);
  })
});
