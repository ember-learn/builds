import Ember from 'ember';
import ProjectsMixin from 'builds/mixins/projects';

export default Ember.Controller.extend(ProjectsMixin, {
  channel: 'beta',
  includeReleasesInFileList: true,
  channelDescription: 'Release builds are production-ready versions of Ember and Ember-Data that have been through a six-week beta cycle.',

  latestVersionOfDocs: Ember.computed('model.release.lastRelease', function() {
    var release = this.get('model.release.lastRelease');
    var [major, minor] = release.split('.');

    return `${major}.${minor}.0`;
  }),

  emberBetaProject: Ember.computed('projects.@each.isEmberBeta', function() {
    return this.get('projects').find(p => p.isEmberBeta);
  })
});
