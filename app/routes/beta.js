import Ember from 'ember';
import S3Bucket from '../lib/s3-bucket';

export default Ember.Route.extend({
  model() {
    return S3Bucket.create({
      title: 'Beta Builds',
      prefix: 'beta/'
    });
  }
});
