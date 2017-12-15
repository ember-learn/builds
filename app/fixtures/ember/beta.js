export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [ /ember\./, /ember-template-compiler/ ],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "2.18.0-beta.3",
  futureVersion: "2.18.0-beta.4",
  finalVersion: '2.18.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2017-01-01',
  date: "2017-12-12",
  nextDate: "2017-12-17",
  changelogPath: "CHANGELOG.md",
  enableTestURL: true,
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#beta'
};
