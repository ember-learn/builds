export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "3.4.0-beta.3",
  futureVersion: "3.4.0",
  finalVersion: '3.4.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2018-08-27',
  date: "2018-08-21",
  nextDate: "2018-08-27",
  changelogPath: "CHANGELOG.md",
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI:
`# Install Ember %s:
npm install --save-dev ember-source@~%s
`
};
