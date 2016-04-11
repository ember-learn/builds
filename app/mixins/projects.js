import Ember from 'ember';
import Project from 'builds/lib/project';

export default Ember.Mixin.create({
  projects: Ember.computed('channel', 'model', function(){
    var projects = Project.find(this.get('channel')),
        bucket   = this.get('model'),
        self = this;

    projects.forEach(function(project){
      if (project.channel === 'beta'){
        project.isEmberBeta = project.projectName === 'Ember';

        [1,2,3,4,5].forEach(function(increment){
          var versionParts = project.lastRelease.split('.');
          var currentBetaNumber = parseInt(versionParts[versionParts.length - 1], 10);
          project['beta' + increment + 'Completed'] = increment <= currentBetaNumber;
          project['isBeta' + increment] = increment === currentBetaNumber;
        });

        var release = Project.find('release', project.projectName)[0];

        // no releases exist for ember-data (yet)
        if (release) {
          project.lastStableVersion = release.initialVersion;
          project.lastStableDate = release.initialReleaseDate;
        }
      }

      project.files = bucket.filterFiles(project.projectFilter, project.ignoreFiles);
      project.description = self.description(project);
      project.lastReleaseDebugUrl = self.lastReleaseUrl(project.baseFileName, project.channel, project.lastRelease, project.debugFileName);
      project.lastReleaseProdUrl  = self.lastReleaseUrl(project.baseFileName, project.channel, project.lastRelease, '.prod.js');
      project.lastReleaseMinUrl   = self.lastReleaseUrl(project.baseFileName, project.channel, project.lastRelease, '.min.js');

      if (project.enableTestURL) {
        project.lastReleaseTestUrl  = self.lastReleaseUrl(project.baseFileName, project.channel, project.lastRelease, '-tests-index.html');
      }

      if (project.channel === 'canary') {
        project.lastRelease = 'latest';
      } else if (project.changelog !== 'false') {
        project.lastReleaseChangelogUrl   = 'https://github.com/' + project.projectRepo + '/blob/v' + project.lastRelease + '/' + project.changelogPath;
      }
    });

    return projects;
  }),

  description: function(project){
    var lastRelease = project.lastRelease,
        futureVersion = project.futureVersion,
        value;

    if (this.get('channel') === 'tagged') {
      value = '';
    } else if (lastRelease) {
      value = 'The builds listed below are incremental improvements made since ' + lastRelease + ' and may become ' + futureVersion + '.';
    } else if (futureVersion) {
      value = 'The builds listed below are not based on a tagged release. Upon the next release cycle they will become ' + futureVersion + '.';
    } else {
      value = 'The builds listed below are based on the most recent development.';
    }

    return new Ember.Handlebars.SafeString(value);
  },

  lastReleaseUrl: function(project, channel, lastRelease, extension){
    if (channel === 'canary') {
      return 'http://builds.emberjs.com/canary/' + project + extension;
    } else {
      return 'http://builds.emberjs.com/tags/v' + lastRelease + '/' + project + extension;
    }
  }
});
