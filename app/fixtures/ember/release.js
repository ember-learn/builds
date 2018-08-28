export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [/ember\./, /ember-template-compiler/],
  projectRepo: 'emberjs/ember.js',
  initialVersion: "3.4.0",
  initialReleaseDate: "2018-08-27",
  lastRelease: "3.4.0",
  futureVersion: "3.4.1",
  channel: "release",
  date: "2018-08-27",
  changelogPath: "CHANGELOG.md",
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI:
`# Install Ember %s:
npm install --save-dev ember-source@~%s
`
};
