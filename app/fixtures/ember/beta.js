export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "3.6.0-beta.2",
  futureVersion: "3.6.0",
  finalVersion: '3.6.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2018-11-19',
  date: "2018-10-29",
  nextDate: "2018-11-05",
  changelogPath: "CHANGELOG.md",
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI:
`# Install Ember %s:
npm install --save-dev ember-source@~%s
`
};
