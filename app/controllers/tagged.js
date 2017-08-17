import Controller from '@ember/controller';
import ProjectsMixin from '../mixins/projects';

export default Controller.extend(ProjectsMixin, {
  channel: 'tagged'
});
