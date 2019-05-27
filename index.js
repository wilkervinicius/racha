
import {AppRegistry} from 'react-native';
import Racha from './src/screens/Racha'
//import Navigator from './src/Navigator'
import {name as appName} from './app.json';
import Auth from './src/screens/Auth'

AppRegistry.registerComponent(appName,   () => Auth);
