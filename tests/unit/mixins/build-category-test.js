import Ember from 'ember';
import BuildCategoryMixin from 'builds/mixins/build-category';
import { module, test } from 'qunit';

module('Unit | Mixin | build category');

// Replace this with your real tests.
test('it works', function(assert) {
  let BuildCategoryObject = Ember.Object.extend(BuildCategoryMixin);
  let subject = BuildCategoryObject.create();
  assert.ok(subject);
});
