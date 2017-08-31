"use strict";

/**
 * Route Mappings
 *
 * Your routes map URLs to views and controllers
 */

module.exports = {
  routes: {
    'GET /v1/scenarios/:scenarioId/generate': 'ScenarioController.generate',
    'GET /v1/schedules/:id/generate': 'ScheduleController.generate',
  }
};
