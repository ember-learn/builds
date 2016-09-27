import Ember from 'ember';

const Project = Ember.Object.extend();

Project.reopenClass({
  FIXTURES:
    [ {
      projectName: 'Ember',
      baseFileName: 'ember',
      projectFilter: [ /ember\./, /ember-template-compiler/ ],
      projectRepo: 'emberjs/ember.js',
      channel: "tagged"
    }, {
      projectName: 'Ember Data',
      baseFileName: 'ember-data',
      projectFilter: [ /ember-data\./ ],
      projectRepo: 'emberjs/data',
      channel: "tagged"
    }, {
      projectName: "Ember",
      baseFileName: 'ember',
      projectFilter: [ /ember\./, /ember-template-compiler/ ],
      projectRepo: 'emberjs/ember.js',
      initialVersion: "2.4.5",
      initialReleaseDate: "2016-06-06",
      lastRelease: "2.4.6",
      futureVersion: "2.4.7",
      channel: "lts",
      date: "2016-06-06",
      changelogPath: "CHANGELOG.md",
      enableTestURL: true,
      debugFileName: ".debug.js",
      ignoreFiles: ['ember.js'],
      installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#release'
    }, {
      projectName: "Ember",
      baseFileName: 'ember',
      projectFilter: [ /ember\./, /ember-template-compiler/ ],
      projectRepo: 'emberjs/ember.js',
      initialVersion: "2.8.0",
      initialReleaseDate: "2016-09-08",
      lastRelease: "2.8.0",
      futureVersion: "2.8.1",
      channel: "release",
      date: "2016-09-08",
      changelogPath: "CHANGELOG.md",
      enableTestURL: true,
      debugFileName: ".debug.js",
      ignoreFiles: ['ember.js'],
      installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#release'
    }, {
      projectName: "Ember",
      baseFileName: 'ember',
      projectFilter: [ /ember\./, /ember-template-compiler/ ],
      projectRepo: 'emberjs/ember.js',
      lastRelease: "2.9.0-beta.2",
      futureVersion: "2.9.0-beta.3",
      finalVersion: '2.9.0',
      channel: "beta",
      cycleEstimatedFinishDate: '2016-10-17',
      date: "2016-09-12",
      nextDate: "2016-09-19",
      changelogPath: "CHANGELOG.md",
      enableTestURL: true,
      debugFileName: ".debug.js",
      ignoreFiles: ['ember.js'],
      installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#beta'
    }, {
      projectName: "Ember Data",
      baseFileName: 'ember-data',
      projectFilter: [ /ember-data\./ ],
      projectRepo: 'emberjs/data',
      lastRelease: "2.8.0",
      futureVersion: "2.8.1",
      channel: "release",
      date: "2016-09-10",
      changelogPath: "CHANGELOG.md",
      debugFileName: ".js",
      installWithEmberCLI: '# Install Ember-Data %s:\nnpm install --save-dev ember-data@%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nnpm install --save-dev emberjs/data#release'
    }, {
      projectName: "Ember Data",
      baseFileName: 'ember-data',
      projectFilter: [ /ember-data\./ ],
      projectRepo: 'emberjs/data',
      lastRelease: "2.9.0-beta.1",
      futureVersion: "2.9.0-beta.2",
      finalVersion: '2.9.0',
      channel: "beta",
      date: "2016-09-11",
      changelogPath: "CHANGELOG.md",
      debugFileName: ".js",
      installWithEmberCLI: '# Install Ember-Data %s:\nnpm install --save-dev ember-data@%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nnpm install --save-dev emberjs/data#beta'
    }, {
      projectName: "Ember",
      baseFileName: 'ember',
      projectFilter: [ /ember\./, /ember-template-compiler/ ],
      projectRepo: 'emberjs/ember.js',
      channel: "canary",
      enableTestURL: true,
      debugFileName: ".debug.js",
      ignoreFiles: ['ember.js'],
      installWithEmberCLI: '# Install the latest Ember canary:\nbower install --save ember#canary'
    }, {
      projectName: "Ember Data",
      baseFileName: 'ember-data',
      projectFilter: [ /ember-data\./ ],
      projectRepo: 'emberjs/data',
      channel: "canary",
      debugFileName: ".js",
      installWithEmberCLI: '# Install the latest Ember-Data canary:\nnpm install --save-dev emberjs/data#master'
    }],
  
  all: function(channel){
    var projects;

    if (channel) {
      projects = this.FIXTURES.filterBy('channel', channel);
    } else {
      projects = this.FIXTURES;
    }

    return projects.map(function(obj) {
      return Project.create(obj);
    });
  },

  find: function(channel, name) {
    var allProjects = this.all(channel);

    if (!name) {
      return allProjects;
    } else {
      return allProjects.filterBy('projectName', name);
    }
  },

  findOne: function(channel, name) {
    var results = this.find(channel, name);
    if (results.length > 1) {
      throw new Error('Expected one result from `find`, got '+results.length);
    }
    return results[0];
  }
});

export default Project;
