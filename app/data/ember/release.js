export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [ /ember\./, /ember-template-compiler/ ],
  projectRepo: 'emberjs/ember.js',
  initialVersion: "2.10.0",
  initialReleaseDate: "2016-11-28",
  lastRelease: "2.10.1",
  futureVersion: "2.10.2",
  channel: "release",
  date: "2016-12-14",
  changelogPath: "CHANGELOG.md",
  enableTestURL: true,
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#release'
};
