"use strict";

/**
 * User
 * @description :: Model for storing scenarios
 */

module.exports = {
  schema: true,

  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    scenarioScripts: {
      collection: 'ScenarioScript',
      via: 'scenario'
    },
    fileName: {
      type: 'string',
      required: true,
    },
    sequence: {
      type: 'text'
    }
  },

  beforeDestroy(criteria, next) {
    ScenarioScript.destroy({scenario: criteria.where.id}).exec((err) => {next()});
  },
};
