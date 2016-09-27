import Ember from 'ember';
import Project from '../lib/project';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      release: Project.findOne('release', 'Ember'),
      beta: Project.findOne('beta', 'Ember'),
      canary: Project.findOne('canary', 'Ember'),
      lts: Project.findOne('lts', 'Ember')
    });
  }
});
