import Ember from 'ember';
import moment from 'moment';

export function formatDateTime([date, format]/*, hash*/) {
  if (format) { return moment(date).format(format); }

  return moment(date).fromNow();
}

export default Ember.Helper.helper(formatDateTime);
