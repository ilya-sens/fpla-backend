"use strict";

/**
 * User
 * @description :: Model for storing schedule
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
    fileName: {
      type: 'string',
      required: true,
    },
    file: {
      type: 'string',
      required: false,
    },
  },
};
