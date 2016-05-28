import Component from 'ember-cli-clipboard/components/copy-button';
import layout from 'ember-cli-clipboard/templates/components/copy-button';

export default Component.extend({
  layout: layout,
  attributeBindings: ['data-label', 'disabled'],
  classNameBindings: ['loading', 'disabled'],

  loading: false,
  disabled: false,

  click() {
    this.set('loading', true);
    this.set('disabled', true);

    Ember.run.later(this, () => {
      this.set('loading', false);
      this.set('disabled', false);
    }, 1000);
  }
});
