import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';
import { module, skip } from 'qunit';

module('Integration | Component | release timeline', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{release-timeline}}`);

    assert.equal(find('*').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#release-timeline}}
        template block text
      {{/release-timeline}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });
});
