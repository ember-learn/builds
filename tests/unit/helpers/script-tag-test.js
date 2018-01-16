import { scriptTag } from 'builds/helpers/script-tag';
import { module, test } from 'qunit';

module('Unit | Helper | script tag', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = scriptTag([42]);
    assert.ok(result);
  });
});
