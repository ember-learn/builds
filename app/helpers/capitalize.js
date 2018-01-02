import Ember from 'ember';
import { capitalize as capitalizeUtil } from '@ember/string';

export function capitalize([name]/*, hash*/) {
  return capitalizeUtil(name);
}

export default Ember.Helper.helper(capitalize);
