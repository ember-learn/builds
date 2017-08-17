import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
    didInsertElement() {
        $('.sk-cube-grid').hide();
    }
});
