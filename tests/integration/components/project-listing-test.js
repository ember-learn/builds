import { moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { skip } from 'qunit';

moduleForComponent('project-listing', 'Integration | Component | project listing', {
  integration: true
});

skip('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{project-listing}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#project-listing}}
      template block text
    {{/project-listing}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
