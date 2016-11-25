export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [ /ember\./, /ember-template-compiler/ ],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "2.10.0-beta.3",
  futureVersion: "2.10.0-beta.4",
  finalVersion: '2.10.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2016-11-28',
  date: "2016-11-01",
  nextDate: "2016-11-07",
  changelogPath: "CHANGELOG.md",
  enableTestURL: true,
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#beta'
};
