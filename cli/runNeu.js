const { default: chalk } = require('chalk');
const initNeu = require('../neu/init.js');
const openNeu = require('../neu/open.js');
const loadViteConfig = require('../vite/loadConfig.js');
const defaultViteConfig = require('../vite/defaultConfig.js');
const { printHeader } = require('../utils/art.js');
const { log, warn, raw } = require('../utils/log.js');

const root = process.cwd();

module.exports = async function runNeu() {
  printHeader();
  await initNeu();

  const vite = await import('vite');
  const userConfig = await loadViteConfig('neutralino');
  const config = vite.mergeConfig(await defaultViteConfig(), userConfig);
  const port = config.server.port || 8082;
  const url = `http://localhost:${port}`;

  raw('');
  raw(chalk.green(`Starting Neu development server on ${url}\n`));

  const server = await vite.createServer(config);
  server.neutralinoAuthPorts = {};
  await server.listen();

  log('Development server is running.', chalk.gray('Press CTRL+C to exit.'));
  log('Key commands available:\n');
  raw(' ', chalk.bgWhite.black.bold(' r '), '-', 'Reload the app');
  raw(' ', chalk.bgWhite.black.bold(' o '), '-', 'Open new app\n');

  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  
  process.stdin.on('data', async (key) => {
    if (key === '\u0003') process.exit(); // CTRL+C
    if (key === 'r') {
      log('Reloading connected app(s)...');
      if (server.ws.clients.size < 1) return warn('No app(s) connected to reload. Make sure you have the app running.');
      server.ws.send({
        type: 'full-reload',
      });
    }
    if (key === 'o') {
      log('Opening new app window...');
      const newNeu = await openNeu(url);
      server.neutralinoAuthPorts[newNeu.uuid] = newNeu.port;
    }
  });

  const newNeu = await openNeu(url);
  server.neutralinoAuthPorts[newNeu.uuid] = newNeu.port;
}