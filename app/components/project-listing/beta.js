import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['left'],
  classNameBindings: ['isCompleted::future-image']
});
