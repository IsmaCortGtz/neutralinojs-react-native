const initNeuProject = require('../neu/init.js');
const updateNeuProject = require('../neu/update.js');
const { printHeader } = require('../utils/art.js');
const { binExists } = require('../neu/exists.js');

module.exports = async function initNeu() {
  printHeader();
  await initNeuProject();
  if (!binExists()) await updateNeuProject();
}