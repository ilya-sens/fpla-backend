"use strict";

/**
 * User
 * @description :: Model for storing scenarios
 */

module.exports = {
  schema: true,

  attributes: {
    index: {
      type: 'integer',
      required: true,
    },
    scenario: {
      model: 'Scenario'
    },
    script: {
      model: 'Script'
    }
  },
};
