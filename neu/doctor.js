const { neuExists, binExists } = require('./exists');

module.exports =  [
  {
    label: 'neutralino is initialized',
    description: 'Checks if neutralino.config.json exists in the project root',
    runAutomaticFix: require('./init'),
    getDiagnostics: () => {
      const needsToBeFixed = !neuExists();
      return { needsToBeFixed };
    }
  },
  {
    label: 'neutralino binaries are installed',
    description: 'Checks if neutralino binaries are installed in the project',
    runAutomaticFix: require('./update'),
    getDiagnostics: () => {
      const needsToBeFixed = !binExists();
      return { needsToBeFixed };
    }
  }
];