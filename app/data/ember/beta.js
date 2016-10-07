export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [ /ember\./, /ember-template-compiler/ ],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "2.9.0-beta.5",
  futureVersion: "2.10.0-beta.6",
  finalVersion: '2.9.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2016-10-17',
  date: "2016-10-07",
  nextDate: "2016-10-10",
  changelogPath: "CHANGELOG.md",
  enableTestURL: true,
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#beta'
};
