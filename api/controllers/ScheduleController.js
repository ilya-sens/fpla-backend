"use strict";

const _ = require('lodash');

/**
 * ScriptController
 * @description :: Server-side logic for manage scripts
 */

module.exports = {
  /**
   * Generates ScheduleFile for Runner
   * @param req
   * @param res
   * @returns {*}
   */
  generate: function (req, res) {
    if (!req.param('id')) return res.badRequest(null, {message: 'You must provide schedule id'});
    let scheduleId = _.toNumber(req.param('id'));

    let result = `from de.ananyev.fpla.runner.scheduler.abstract_scheduler import AbstractScheduler
from de.ananyev.fpla.runner.util import gen_db_resource
from de.ananyev.fpla.runner.controller import main_controller

import schedule
import time

class Scheduler(AbstractScheduler):
        
    def __init__(self):
        super().__init__() 
        self.scheduler_id = ${scheduleId}
        
        
`;
    return Schedule.findOne({id: scheduleId})
      .exec((err, schedule) => {
        if (err) {
          return res.negotiate(err);
        }
        _.split(schedule.sequence, "\n").forEach((it) => {
          result += "    " + it + "\n";
        });
        result += "\n";
        return Schedule.update({id: scheduleId}, {file: result})
          .exec((error, schedule) => {
            return res.json(schedule);
          });
      })
  }
};
