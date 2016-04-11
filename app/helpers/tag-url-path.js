import Ember from 'ember';

export function tagUrlPath([url]/*, hash*/) {
  let pathIndex = url.indexOf('tags');

  return url.slice(pathIndex);
}

export default Ember.Helper.helper(tagUrlPath);
