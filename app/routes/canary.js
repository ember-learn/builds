import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  model() {
    return fetch('https://s3.amazonaws.com/builds.emberjs.com/canary.json').then((response) => {
      return response.json();
    });
  },

  setupController(controller, model){
    const installWithEmberCLI = `# Install the latest Ember canary:
npm install --save-dev https://s3.amazonaws.com/builds.emberjs.com${model.assetPath}`;

    controller.set('installWithEmberCLI', installWithEmberCLI)
  }
});
