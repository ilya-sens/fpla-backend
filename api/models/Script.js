"use strict";

/**
 * User
 * @description :: Model for storing script
 */

module.exports = {
  schema: true,

  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    sequence: {
      type: 'text',
      required: 'true',
    },
    scenarioScripts: {
      collection: 'ScenarioScript',
      via: 'script'
    },
  },

  beforeDestroy(criteria, next) {
    ScenarioScript.destroy({script: criteria.where.id}).exec((err) => {next()});
  },
};
