export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "3.2.0-beta.1",
  futureVersion: "3.2.0-beta.2",
  finalVersion: '3.2.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2018-05-21',
  date: "2018-04-10",
  nextDate: "2018-04-16",
  changelogPath: "CHANGELOG.md",
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI:
`# Install Ember %s:
npm install --save-dev ember-source@~%s
`
};
