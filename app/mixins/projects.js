import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';
import Project from '../lib/project';

export default Mixin.create({
  projects: computed('channel', 'model', 'model.files', 'model.releaseSteps', function() {
    let projects = Project.find(this.get('channel'));
    let bucket = this.get('model');

    if (this.isIndexController) {
      bucket = this.get('model.releaseSteps');
    }

    projects.forEach((project) => {
      if (project.channel === 'beta') {
        project.isEmberBeta = project.projectName === 'Ember';

        [1,2,3,4,5].forEach((increment) => {
          let versionParts = project.lastRelease.split('.');
          let currentBetaNumber = parseInt(versionParts[versionParts.length - 1], 10);

          project[`beta${increment}Completed`] = increment <= currentBetaNumber;
          project[`isBeta${increment}`] = increment === currentBetaNumber;
        });

        let release = Project.find('release', project.projectName)[0];

        // no releases exist for ember-data (yet)
        if (release) {
          project.lastStableVersion = release.initialVersion;
          project.lastStableDate = release.initialReleaseDate;
        }
      }

      project.files = bucket.filterFiles(project.projectFilter, project.ignoreFiles);
      project.description = this.description(project);
      project.lastReleaseDebugUrl = this.lastReleaseUrl(project.baseFileName, project.channel, project.lastRelease, project.debugFileName);
      project.lastReleaseProdUrl  = this.lastReleaseUrl(project.baseFileName, project.channel, project.lastRelease, '.prod.js');
      project.lastReleaseMinUrl   = this.lastReleaseUrl(project.baseFileName, project.channel, project.lastRelease, '.min.js');

      if (project.enableTestURL) {
        project.lastReleaseTestUrl  = this.lastReleaseUrl(project.baseFileName, project.channel, project.lastRelease, '-tests-index.html');
      }

      if (project.channel === 'canary') {
        project.lastRelease = 'latest';
      } else if (project.changelog !== 'false') {
        project.lastReleaseChangelogUrl   = `https://github.com/${project.projectRepo}/blob/v${project.lastRelease}/${project.changelogPath}` ;
      }
    });

    return projects;
  }),

  description(project) {
    let lastRelease = project.lastRelease;
    let futureVersion = project.futureVersion;
    let value;

    if (this.get('channel') === 'tagged') {
      value = '';
    } else if (lastRelease) {
      value = `The builds listed below are incremental improvements made since ${lastRelease} and may become ${futureVersion}.`;
    } else if (futureVersion) {
      value = `The builds listed below are not based on a tagged release. Upon the next release cycle they will become ${futureVersion}.`;
    } else {
      value = 'The builds listed below are based on the most recent development.';
    }

    return new htmlSafe(value);
  },

  lastReleaseUrl(project, channel, lastRelease, extension) {
    if (channel === 'canary') {
      return `http://builds.emberjs.com/canary/${project}${extension}`;
    } else {
      return `http://builds.emberjs.com/tags/v${lastRelease}/${project}${extension}`;
    }
  }
});
