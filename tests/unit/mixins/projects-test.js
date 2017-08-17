import EmberObject from '@ember/object';
import ProjectsMixin from 'builds/mixins/projects';
import { module, test } from 'qunit';

module('Unit | Mixin | projects');

// Replace this with your real tests.
test('it works', function(assert) {
  let ProjectsObject = EmberObject.extend(ProjectsMixin);
  let subject = ProjectsObject.create();
  assert.ok(subject);
});
