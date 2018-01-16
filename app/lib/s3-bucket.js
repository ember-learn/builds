import $ from 'jquery';
import { A } from '@ember/array';
import EmberObject, { computed, observer } from '@ember/object';
import S3File from './s3-file';


export default EmberObject.extend({
  isLoading: false,

  // Setup these as default values.
  // They can be overridden on create.
  queryUseSSL: true,
  objectUseSSL: false,
  delimiter: '/',
  bucket: 'builds.emberjs.com',
  endpoint: 's3.amazonaws.com',

  delimiterParameter: computed('delimiter', function(){
    let delimiter = this.getWithDefault('delimiter','').toString();
    return (delimiter) ? 'delimiter=' + delimiter : '';
  }),

  maxKeysParameter: computed('maxKeys', function(){
    return 'max-keys=' + this.getWithDefault('maxKeys','').toString();
  }),

  prefixParameter: computed('prefix', function(){
    return 'prefix=' + this.getWithDefault('prefix','').toString();
  }),

  queryProtocol: computed('queryUseSSL', function() {
    return this.get('queryUseSSL') ? 'https://' : 'http://';
  }),

  queryBaseUrl: computed('queryProtocol', 'endpoint', 'bucket', function(){
    return this.get('queryProtocol') + this.get('endpoint') + '/' + this.get('bucket');
  }),

  objectProtocol: computed('objectUseSSL', function() {
    return this.get('objectUseSSL') ? 'https://' : 'http://';
  }),

  objectBaseUrl: computed('objectProtocol', 'bucket', function(){
    return this.get('objectProtocol') + this.get('bucket');
  }),

  queryParams: computed('delimiterParameter', 'maxKeysParameter', 'prefixParameter', function(){
    return this.get('delimiterParameter')  + '&' +
      this.get('maxKeysParameter')    + '&' +
      this.get('prefixParameter');
  }),

  queryUrl: computed('queryBaseUrl', 'queryParams', function(){
    return this.get('queryBaseUrl') + '?' + this.get('queryParams');
  }),

  filesPresent: computed('files.[]', function(){
    return this.get('files').length;
  }),

  init() {
    this._super(...arguments);
    this.files = [];

    this.load();
  },

  filterFiles(filter, ignoreFiles){
    let files = this.get('files');

    return files.filter(function(e) {
      let name     = e.get('name');
      let ignored  = A(ignoreFiles).any(f => name.indexOf(f) >= 0);
      let selected = filter.any(f => name.match(f));

      return !ignored && selected;
    });
  },

  load: observer('queryUrl', function() {
    let self = this;
    this.set('isLoading', true);

    this.loadAllPages('', []).then(function(files) {
      self.set('isLoading', false);
      self.set('files', files.sort(function(a, b) {
        return b.lastModified - a.lastModified;
      }));
    });
  }),

  loadAllPages(marker, files) {
    let self = this;
    let baseUrl = this.get('objectBaseUrl');

    return $.get(this.get('queryUrl') + '&marker=' + marker).then(function(data) {
      let contents = data.getElementsByTagName('Contents');
      let isTruncated = data.getElementsByTagName('IsTruncated')[0].firstChild.data === "true";
      let length = contents.length;

      self.set('response', data);

      for (let i = 0; i < length; i++) {
        let size = contents[i].getElementsByTagName('Size')[0].firstChild.data;
        let name = contents[i].getElementsByTagName('Key')[0].firstChild.data;
        let lastModified = new Date(contents[i].getElementsByTagName('LastModified')[0].firstChild.data);

        files.push(
          S3File.create({
            name: name,
            size: size,
            lastModified: lastModified,
            relativePath: name,
            baseUrl: baseUrl
          })
        );
      }

      if (isTruncated) {
        let lastFile = files[files.length - 1];
        return self.loadAllPages(lastFile.get('name'), files);
      } else {
        return files;
      }
    });
  }
});
