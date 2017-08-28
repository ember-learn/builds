/* eslint-env node */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    exclude: ['.DS_Store', '*-test.js'],

    gzip: {
      filePattern: '**/*.{js,css,ico,map,xml,txt,svg,eot,ttf,woff,woff2}'
    },
    pipeline: {
      activateOnDeploy: true
    }
  };

  ENV['s3'] = {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    bucket: process.env.bucket,
    region: process.env.region,
    prefix: "releases"
  };
  ENV['s3-index'] = {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    bucket: process.env.bucket,
    region: process.env.region,
    prefix: "releases",
    filePattern: 'index.json'
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
