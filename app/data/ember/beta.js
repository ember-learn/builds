export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [ /ember\./, /ember-template-compiler/ ],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "2.11.0-beta.2",
  futureVersion: "2.11.0-beta.3",
  finalVersion: '2.11.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2017-01-09',
  date: "2016-11-28",
  nextDate: "2016-12-05",
  changelogPath: "CHANGELOG.md",
  enableTestURL: true,
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#beta'
};
