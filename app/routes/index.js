import Ember from 'ember';
import Project from '../lib/project';
import S3Bucket from 'builds/lib/s3-bucket';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      releaseSteps: S3Bucket.create({
        title: 'Beta Builds',
        prefix: 'beta/'
      }),
      release: Project.findOne('release', 'Ember'),
      beta: Project.findOne('beta', 'Ember'),
      canary: Project.findOne('canary', 'Ember'),
      lts: Project.findOne('lts', 'Ember')
    });
  }
});
