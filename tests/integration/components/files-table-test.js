import { moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { skip } from 'qunit';

moduleForComponent('files-table', 'Integration | Component | files table', {
  integration: true
});

skip('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{files-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#files-table}}
      template block text
    {{/files-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
