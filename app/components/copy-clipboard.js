/* globals ZeroClipboard */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  hasFlash: ZeroClipboard.detectFlashSupport(),

  didInsertElement: function () {
    var clip = new ZeroClipboard(this.$('button'), {
      // This would normally be a relative path
      moviePath: "/images/ZeroClipboard.swf",

      trustedDomains: ["*"],
      allowScriptAccess: "always"
    });

    clip.on('mousedown', function(/*client, e*/) {
      Ember.run.later(this, function() {
        Ember.$(this).removeClass('loading');
        Ember.$(this).removeAttr('disabled');
      }, 1000);
      Ember.run.next(this, function() {
        Ember.$(this).addClass('loading');
        Ember.$(this).attr('disabled', 'disabled');
      });
    });

    this.$('input').on('click', function() {
      Ember.$(this).select();
    });
  }
});
