import EmberObject from '@ember/object';

import EmberTagged from '../fixtures/ember/tagged';
import EmberCanary from '../fixtures/ember/canary';
import EmberBeta from '../fixtures/ember/beta';
import EmberRelease from '../fixtures/ember/release';
import EmberLTS from '../fixtures/ember/lts';

import EmberDataRelease from '../fixtures/ember-data/release';
import EmberDataTagged from '../fixtures/ember-data/tagged';
import EmberDataBeta from '../fixtures/ember-data/beta';
import EmberDataCanary from '../fixtures/ember-data/canary';

const Project = EmberObject.extend();

const FIXTURES = [
  EmberTagged,
  EmberDataTagged,
  EmberLTS,
  EmberRelease,
  EmberBeta,
  EmberDataRelease,
  EmberDataBeta,
  EmberCanary,
  EmberDataCanary
];

Project.reopenClass({
  all(channel) {
    let projects = FIXTURES;

    if (channel) { projects = FIXTURES.filterBy('channel', channel); }

    return projects.map(obj => Project.create(obj));
  },

  find(channel, name) {
    let allProjects = this.all(channel);

    if (!name) { return allProjects; }

    return allProjects.filterBy('projectName', name);
  },

  findOne(channel, name) {
    let results = this.find(channel, name);
    if (results.length > 1) {
      throw new Error(`Expected one result from \`find\`, got ${results.length}`);
    }

    return results[0];
  }
});

export default Project;
