import Ember from 'ember';
import S3Bucket from 'builds/lib/s3-bucket';

export default Ember.Route.extend({
  model: function() {
    let bucket = S3Bucket.create({title: 'Release Builds', prefix: 'release/'});

    return bucket;
  }
});
