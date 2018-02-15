export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "3.1.0-beta.1",
  futureVersion: "3.1.0-beta.2",
  finalVersion: '3.1.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2018-03-26',
  date: "2018-02-12",
  nextDate: "2018-02-19",
  changelogPath: "CHANGELOG.md",
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI:
`# Install Ember %s:
npm install --save-dev ember-source@~%s
`
};
