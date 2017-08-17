import { htmlSafe } from '@ember/string';
import EmberObject, { computed } from '@ember/object';
import Ember from 'ember';

export default EmberObject.extend({
  scriptTag: computed('url', function() {
    let escapedURL = Ember.Handlebars.Utils.escapeExpression(this.get('url'));

    return new htmlSafe('<script src="' + escapedURL + '"></script>').toString();
  }),

  url: computed('baseUrl', 'relativePath', function() {
    return this.get('baseUrl') + '/' + this.get('relativePath');
  })
});
