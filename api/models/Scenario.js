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
      collection: 'ScenarioScript'
    },
  },
};
