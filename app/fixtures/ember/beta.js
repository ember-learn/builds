export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [ /ember\./, /ember-template-compiler/ ],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "2.16.0-beta.1",
  futureVersion: "2.16.0-beta.2",
  finalVersion: '2.16.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2017-10-09',
  date: "2017-08-31",
  nextDate: "2017-09-11",
  changelogPath: "CHANGELOG.md",
  enableTestURL: true,
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#beta'
};
