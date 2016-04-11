import Ember from 'ember';
import S3File from './s3-file';


export default Ember.Object.extend({
  files: [],
  isLoading: false,

  // Setup these as default values.
  // They can be overridden on create.
  queryUseSSL: true,
  objectUseSSL: false,
  delimiter: '/',
  bucket: 'builds.emberjs.com',
  endpoint: 's3.amazonaws.com',

  delimiterParameter: Ember.computed('delimiter', function(){
    var delimiter = this.getWithDefault('delimiter','').toString();
    return (delimiter) ? 'delimiter=' + delimiter : '';
  }),

  maxKeysParameter: Ember.computed('maxKeys', function(){
    return 'max-keys=' + this.getWithDefault('maxKeys','').toString();
  }),

  prefixParameter: Ember.computed('prefix', function(){
    return 'prefix=' + this.getWithDefault('prefix','').toString();
  }),

  queryProtocol: Ember.computed('queryUseSSL', function() {
    return this.get('queryUseSSL') ? 'https://' : 'http://';
  }),

  queryBaseUrl: Ember.computed('queryProtocol', 'endpoint', 'bucket', function(){
    return this.get('queryProtocol') + this.get('endpoint') + '/' + this.get('bucket');
  }),

  objectProtocol: Ember.computed('objectUseSSL', function() {
    return this.get('objectUseSSL') ? 'https://' : 'http://';
  }),

  objectBaseUrl: Ember.computed('objectProtocol', 'bucket', function(){
    return this.get('objectProtocol') + this.get('bucket');
  }),

  queryParams: Ember.computed('delimiterParameter', 'maxKeysParameter', 'prefixParameter', function(){
    return this.get('delimiterParameter')  + '&' +
      this.get('maxKeysParameter')    + '&' +
      this.get('prefixParameter');
  }),

  queryUrl: Ember.computed('queryBaseUrl', 'queryParams', function(){
    return this.get('queryBaseUrl') + '?' + this.get('queryParams');
  }),

  filesPresent: Ember.computed('files.[]', function(){
    return this.get('files').length;
  }),

  filterFiles: function(filter, ignoreFiles){
    var files = this.get('files');
    var ignoreFiles = Ember.A(ignoreFiles);

    return files.filter(function(e) {
      var name = e.get('name');
      var ignored = ignoreFiles.any(function(f) { return name.indexOf(f) >= 0; });
      var selected = filter.any(function(f) { return name.match(f); });

      return !ignored && selected;
    });
  },

  load: Ember.on('init', Ember.observer('queryUrl', function() {
    var self = this;
    this.set('isLoading', true);

    this.loadAllPages('', []).then(function(files) {
      self.set('isLoading', false);
      self.set('files', files.sort(function(a, b) {
        return b.lastModified - a.lastModified;
      }));
    });
  })),

  loadAllPages: function(marker, files) {
    var self = this;
    var baseUrl = this.get('objectBaseUrl');

    return Ember.$.get(this.get('queryUrl') + '&marker=' + marker).then(function(data) {
      var contents = data.getElementsByTagName('Contents');
      var isTruncated = data.getElementsByTagName('IsTruncated')[0].firstChild.data === "true";
      var length = contents.length;

      self.set('response', data);

      for(var i = 0; i < length; i++) {
        var size = contents[i].getElementsByTagName('Size')[0].firstChild.data;
        var name = contents[i].getElementsByTagName('Key')[0].firstChild.data;
        var lastModified = new Date(contents[i].getElementsByTagName('LastModified')[0].firstChild.data);

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
        var lastFile = files[files.length - 1];
        return self.loadAllPages(lastFile.get('name'), files);
      } else {
        return files;
      }
    });
  }
});
