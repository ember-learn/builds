export default {
  projectName: "Ember",
  baseFileName: 'ember',
  projectFilter: [ /ember\./, /ember-template-compiler/ ],
  projectRepo: 'emberjs/ember.js',
  initialVersion: "2.16.0",
  initialReleaseDate: "2017-10-09",
  lastRelease: "2.16.2",
  futureVersion: "2.16.3",
  channel: "lts",
  date: "2017-11-01",
  changelogPath: "CHANGELOG.md",
  enableTestURL: true,
  debugFileName: ".debug.js",
  ignoreFiles: ['ember.js'],
  installWithEmberCLI: '# Install Ember %s:\nbower install --save ember#v%s\n# Or, install the latest build of this channel which may include unreleased incremental changes:\nbower install --save ember#release'
};
