export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "3.0.0-beta.3",
  futureVersion: "3.0.0-beta.4",
  finalVersion: '3.0.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2017-02-12',
  date: "2018-01-01",
  nextDate: "2018-01-22",
  changelogPath: "CHANGELOG.md",
  enableTestURL: true,
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI: '# Install Ember %s:\nnpm install --save ember-source#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nnpm install --save emberjs/ember.js#beta'
};
