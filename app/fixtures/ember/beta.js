export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [ /ember\./, /ember-template-compiler/ ],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "2.17.0-beta.1",
  futureVersion: "2.17.0-beta.2",
  finalVersion: '2.16.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2017-11-20',
  date: "2017-10-03",
  nextDate: "2017-10-16",
  changelogPath: "CHANGELOG.md",
  enableTestURL: true,
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#beta'
};
