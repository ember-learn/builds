import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | tagged', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:tagged');
    assert.ok(controller);
  });
});
