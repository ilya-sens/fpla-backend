"use strict";

const _ = require('lodash');
/**
 * ScenarioController
 * @description :: Server-side logic for manage scenarios
 */

module.exports = {
  /**
   * Generates ScenarioFile for Runner
   * @param req
   * @param res
   * @returns {*}
   */
  generate: function (req, res) {
    if (!req.param('scenarioId')) return res.badRequest(null, {message: 'You must provide scenario id'});
    let scenarioId = _.toNumber(req.param('scenarioId'));

    let result = `from de.ananyev.fpla.runner.scenario.abstract_scenario import AbstractScenario
from de.ananyev.fpla.runner.util import gen_db_resource
from de.ananyev.fpla.runner.util.browser_type import BrowserType
from de.ananyev.fpla.runner.util import browser_helper


class Scenario(AbstractScenario):
        
    def __init__(self):
        super().__init__() 
        self.scenario_id = ${scenarioId}
        
`;
    return ScenarioScript.find({scenario: scenarioId}).populate('script')
      .then((scenarioScripts) => {
        _.orderBy(scenarioScripts, ['index']).forEach((it) => {
          _.split(it.script.sequence, "\n").forEach((it) => {
            result += "    " + it + "\n";
          });
          result += '\n';
        });
        result += `if __name__ == '__main__':
    Scenario().run()`;
        return Scenario.update({id: scenarioId}, {sequence: result})
          .exec((error, scenario) => {
            return res.json(scenario)[0];
          });
      })
      .fail((err) => {
        return res.negotiate(err);
      });
  }
};
