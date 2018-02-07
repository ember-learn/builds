import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { find } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';
import { module, skip } from 'qunit';

module('Integration | Component | project listing', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{project-listing}}`);

    assert.equal(find('*').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#project-listing}}
        template block text
      {{/project-listing}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });
});
