const { printHeader } = require('../utils/art.js');
const buildNeuProject = require('../neu/build');

module.exports = async function buildNeu() {
  printHeader();
  await buildNeuProject();
}