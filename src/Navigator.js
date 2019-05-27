import React from 'react'
//import { createSwitchNavigator} from 'react-navigation'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Auth from './screens/Auth'
import commonStyles from './commonStyles'
//import Menu from './screens/Menu'
import Racha from './screens/Racha'
//import AuthOrApp from './screens/AuthOrApp'




const AppNavigator = createStackNavigator({
  Home: {
    screen: Racha,
  },
  Auth: {
    screen: Auth,
  },
}, {
    initialRouteName: 'Auth',
});

export default createAppContainer(AppNavigator);

/*

const MainRoutes = {
    Auth:{
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: Racha
    }
}

const MainNavigator = 
	createSwitchNavigator(MainRoutes, { initialRouteName: 'Auth'

})


export default MainNavigator
*/