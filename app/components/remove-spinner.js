import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        Ember.$('.sk-cube-grid').hide();
    }
});
