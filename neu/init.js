const fs = require('fs');
const path = require('path');
const { neuExists } = require('./exists');
const { log } = require('../utils/log');
const root = process.cwd();

module.exports = async function initializeNeuProject() {
  if (neuExists()) return log('Neutralino project already initialized.');
  log('Initializing Neutralino project...');
    
  fs.mkdirSync(path.join(root, 'neutralino', 'log'), { recursive: true });
  fs.writeFileSync(path.join(root, 'neutralino', 'neutralino.config.json'), ' ');
}