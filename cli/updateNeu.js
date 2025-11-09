const updateNeuProject = require('../neu/update.js');
const { printHeader } = require('../utils/art.js');

module.exports = async function updateNeu() {
  printHeader();
  await updateNeuProject();
}