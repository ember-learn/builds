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
      initialVersion: "2.4.0",
      initialReleaseDate: "2016-02-29",
      lastRelease: "2.4.4",
      futureVersion: "2.4.5",
      channel: "release",
      date: "2016-04-03",
      changelogPath: "CHANGELOG.md",
      enableTestURL: true,
      debugFileName: ".debug.js",
      ignoreFiles: ['ember.js'],
      installWithEmberCLI: '# Install Ember %s:\nbower install --dev ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --dev ember#release'
    }, {
      projectName: "Ember",
      baseFileName: 'ember',
      projectFilter: [ /ember\./, /ember-template-compiler/ ],
      projectRepo: 'emberjs/ember.js',
      lastRelease: "2.5.0-beta.1",
      futureVersion: "2.5.0-beta.2",
      finalVersion: '2.5.0',
      channel: "beta",
      cycleEstimatedFinishDate: '2016-04-11',
      date: "2016-02-29",
      nextDate: "2016-03-07",
      changelogPath: "CHANGELOG.md",
      enableTestURL: true,
      debugFileName: ".debug.js",
      ignoreFiles: ['ember.js'],
      installWithEmberCLI: '# Install Ember %s:\nbower install --dev ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --dev ember#beta'
    }, {
      projectName: "Ember Data",
      baseFileName: 'ember-data',
      projectFilter: [ /ember-data\./ ],
      projectRepo: 'emberjs/data',
      lastRelease: "2.4.0",
      futureVersion: "2.4.1",
      channel: "release",
      date: "2016-02-29",
      changelogPath: "CHANGELOG.md",
      debugFileName: ".js",
      installWithEmberCLI: '# Install Ember-Data %s:\nnpm install --save-dev ember-data@%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nnpm install --save-dev emberjs/data#release'
    }, {
      projectName: "Ember Data",
      baseFileName: 'ember-data',
      projectFilter: [ /ember-data\./ ],
      projectRepo: 'emberjs/data',
      lastRelease: "2.5.0-beta.1",
      futureVersion: "2.5.0-beta.2",
      finalVersion: '2.5.0',
      channel: "beta",
      date: "2016-03-02",
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
      installWithEmberCLI: '# Install the latest Ember canary:\nbower install --dev ember#canary'
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