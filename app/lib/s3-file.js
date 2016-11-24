import Ember from 'ember';

export default Ember.Object.extend({
  scriptTag: Ember.computed('url', function() {
    var escapedURL = Ember.Handlebars.Utils.escapeExpression(this.get('url'));

    return new Ember.Handlebars.SafeString('<script src="' + escapedURL + '"></script>').toString();
  }),

  url: Ember.computed('baseUrl', 'relativePath', function() {
    return this.get('baseUrl') + '/' + this.get('relativePath');
  })
});
