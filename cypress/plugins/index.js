/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('.', 'cypress/config', `${file}.json`);

  return fs.readJson(pathToConfigFile);
}
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const file = config.env.configFile || 'prod';

  return getConfigurationByFile(file);
};
