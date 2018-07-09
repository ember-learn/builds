export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  lastRelease: "3.3.0-beta.5",
  futureVersion: "3.3.0",
  finalVersion: '3.3.0',
  channel: "beta",
  cycleEstimatedFinishDate: '2018-08-13',
  date: "2018-07-02",
  nextDate: "2018-07-09",
  changelogPath: "CHANGELOG.md",
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI:
`# Install Ember %s:
npm install --save-dev ember-source@~%s
`
};
