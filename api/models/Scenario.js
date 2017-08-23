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
  },

  beforeDestroy(criteria, next) {
    ScenarioScript.destroy({scenario: criteria.where.id}).exec((err) => {next()});
  },
};
