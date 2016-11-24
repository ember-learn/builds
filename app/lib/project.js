import Ember from 'ember';

import EmberTagged from '../data/ember/tagged';
import EmberCanary from '../data/ember/canary';
import EmberBeta from '../data/ember/beta';
import EmberRelease from '../data/ember/release';
import EmberLTS from '../data/ember/lts';

import EmberDataRelease from '../data/ember-data/release';
import EmberDataTagged from '../data/ember-data/tagged';
import EmberDataBeta from '../data/ember-data/beta';
import EmberDataCanary from '../data/ember-data/canary';

const Project = Ember.Object.extend();

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
    var projects = FIXTURES;

    if (channel) { projects = FIXTURES.filterBy('channel', channel); }

    return projects.map(obj => Project.create(obj));
  },

  find(channel, name) {
    var allProjects = this.all(channel);

    if (!name) { return allProjects; }

    return allProjects.filterBy('projectName', name);
  },

  findOne(channel, name) {
    var results = this.find(channel, name);
    if (results.length > 1) {
      throw new Error(`Expected one result from \`find\`, got ${results.length}`);
    }

    return results[0];
  }
});

export default Project;
