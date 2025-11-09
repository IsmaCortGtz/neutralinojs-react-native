const path = require('path');
const { execSync } = require('child_process');
const init = require('./init');
const { log } = require('../utils/log.js');
const { neuExists, binExists } = require('./exists');
const root = process.cwd();

module.exports = async function updateNeuProject() {
  if (!neuExists()) await init();
  log('Updating Neutralino project...\n\n');
  
  try {
    const neuPath = path.join(root, 'neutralino');
    const out = fs.openSync(path.join(root, 'neutralino', 'log', 'cli.log'), 'a');
    const err = fs.openSync(path.join(root, 'neutralino', 'log', 'cli.err.log'), 'a');

    process.chdir(neuPath);
    execSync('neu update', { stdio: ['ignore', out, err] });

    log('Neutralino project updated successfully!');
  } catch (error) {
    log('Error updating Neutralino project. Please check the cli log files in the neutralino directory for more details.');
  } finally {
    process.chdir(root);
  }
}