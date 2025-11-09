import '..';
import { AppRegistry } from 'react-native';
import { init } from '@neutralinojs/lib';
import { name as appName } from '../app.json';

AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

init();