import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import Ember from 'ember';

export function scriptTag([url]/*, hash*/) {
  let escapedURL = Ember.Handlebars.Utils.escapeExpression(url);

  return htmlSafe(`<script src="${escapedURL}"></script>`);
}

export default helper(scriptTag);
