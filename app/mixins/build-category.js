import Ember from 'ember';

export default Ember.Mixin.create({
  renderTemplate: function() {
    this.render('build-list');
  }
});
