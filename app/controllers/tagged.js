import Ember from 'ember';
import ProjectsMixin from '../mixins/projects';

export default Ember.Controller.extend(ProjectsMixin, {
  channel: 'tagged'
});
