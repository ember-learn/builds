import Ember from 'ember';

export function printf([template, value]/*, hash*/) {
  return template.replace(/%s/g, value);
}

export default Ember.Helper.helper(printf);
