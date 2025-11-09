const { default: chalk } = require('chalk');
const { log: baseLog, error: baseError, warn: baseWarn } = console;

const log = (...args) => {
  baseLog(chalk.bgCyan.black.bold(' Info '), ...args);
};

const error = (...args) => {
  baseError(chalk.bgRed.white.bold(' Error '), ...args);
};

const warn = (...args) => {
  baseWarn(chalk.yellow.bold('warn'), ...args);
};

const raw = (...args) => {
  baseLog(...args);
}

module.exports = {
  log,
  error,
  warn,
  raw
};