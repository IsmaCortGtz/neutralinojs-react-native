const { platform } = require('os');
const { exec } = require('child_process');
const { warn } = require('./log.js');

function open(url) {
  const os = platform();
  let command = '';
  switch (os) {
    case 'win32':
      command = `start ${url}`;
      break;
    case 'darwin':
      command = `open ${url}`;
      break;
    case 'linux':
      command = `xdg-open ${url}`;
      break;
    default:
      warn(`Unsupported platform: ${os}`);
      return;
  }

  exec(command);
}

module.exports = open;