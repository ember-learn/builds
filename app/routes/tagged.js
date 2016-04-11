import Ember from 'ember';
import S3Bucket from 'builds/lib/s3-bucket';

export default Ember.Route.extend({
  model: function() {
    return S3Bucket.create({title: 'Canary Builds', prefix: 'canary/' });
  }
});
