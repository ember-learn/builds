import Ember from 'ember';

export function scriptTag([url]/*, hash*/) {
  let escapedURL = Ember.Handlebars.Utils.escapeExpression(url);

  return Ember.String.htmlSafe(`<script src="${escapedURL}"></script>`);
}

export default Ember.Helper.helper(scriptTag);
