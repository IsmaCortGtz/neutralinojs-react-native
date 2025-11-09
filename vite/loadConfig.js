const fs = require('fs');
const path = require('path');
const root = process.cwd();

module.exports = async function loadViteConfig(dir = '.') {
  try {
    const configPath = path.join(root, dir, 'vite.config.js');
    if (!fs.existsSync(configPath)) return {};
  
    const vite = await import('vite');
    const result = await vite.loadConfigFromFile(
      { command: 'serve', mode: 'development' },
      configPath,
    );

    return result?.config || {};
  } catch (error) {
    return {};
  }
}