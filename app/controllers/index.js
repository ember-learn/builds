import Ember from 'ember';

export default Ember.Controller.extend({
  latestVersionOfDocs: Ember.computed('model.release.lastRelease', function() {
    var release = this.get('model.release.lastRelease');
    var [major, minor] = release.split('.');

    return `${major}.${minor}.0`;
  })
});
