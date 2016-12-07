import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-cli-usage', 'Integration | Component | ember cli usage', {
  integration: true
});

test('it renders nothing if project doesn\'t install with Ember CLI', function(assert) {
  this.project = { installWithEmberCLI: false };
  this.render(hbs`{{ember-cli-usage project=project}}`);

  assert.equal(this.$().text().trim(), '');
});
