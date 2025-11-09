const { default: chalk } = require('chalk');

const getFiglet = () => {
    const neutralinoText =
 `\n  _   _            _             _ _             _
 | \\ | | ___ _   _| |_ _ __ __ _| (_)_ __   ___ (_)___
 |  \\| |/ _ \\ | | | __| '__/ _' | | | '_ \\ / _ \\| / __|
 | |\\  |  __/ |_| | |_| | | (_| | | | | | | (_) | \\__ \\
 |_| \\_|\\___|\\__,_|\\__|_|  \\__,_|_|_|_| |_|\\___// |___/
                                               |__/\n\n`;

    return neutralinoText;
}

const printHeader = () => {
    console.log('\n' + chalk.yellow.bold('Welcome to @neutralinojs/react-native'))
    console.log(chalk.yellow(getFiglet()));
}

module.exports = {
    printHeader,
    getFiglet
};