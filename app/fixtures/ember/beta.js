export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "3.7.0-beta.1",
  futureVersion: "3.7.0",
  finalVersion: '3.7.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2018-01-07',
  date: "2018-12-06",
  nextDate: "2018-12-10",
  changelogPath: "CHANGELOG.md",
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI:
`# Install Ember %s:
npm install --save-dev ember-source@~%s
`
};
