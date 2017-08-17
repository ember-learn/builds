import Route from '@ember/routing/route';
import S3Bucket from '../lib/s3-bucket';

export default Route.extend({
  model() {
    return S3Bucket.create({
      title: 'Tagged Release Builds',
      prefix: 'tags/v',
      delimiter: ''
    });
  }
});
