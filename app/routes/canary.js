import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  model() {
    return fetch('http://builds.emberjs.com/canary.json').then((response) => {
      return response.json();
    });
  },

  setupController(controller, model){
    const installWithEmberCLI = `# Install the latest Ember canary:
npm install --save-dev http://builds.emberjs.com${model.assetPath}`;

    controller.set('installWithEmberCLI', installWithEmberCLI)
  }
});
