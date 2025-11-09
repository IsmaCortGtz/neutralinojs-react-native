module.exports = {
  platforms: {
    neu: {
      dependencyConfig: () => ({}),
      projectConfig: () => ({
        sourceDir: 'neutralino'
      })
    }
  },
  commands: [
    {
      name: 'init-neu',
      func: require('./cli/initNeu.js')
    },
    {
      name: 'update-neu',
      func: require('./cli/updateNeu.js')
    },
    {
      name: 'run-neu',
      func: require('./cli/runNeu.js')
    },
    {
      name: 'build-neu',
      func: require('./cli/buildNeu.js')
    }
  ],
  healthChecks: [
    {
      label: 'Neutralino',
      healthchecks: require('./neu/doctor.js')
    }
  ]
}