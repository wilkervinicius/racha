import React from 'react'
import { createSwitchNavigator, createDrawerNavigator} from 'react-navigation'
import Agenda from './screens/Racha'
import Auth from './screens/Auth'
import commonStyles from './commonStyles'
//import Menu from './screens/Menu'
import Racha from './screens/Racha';
//import AuthOrApp from './screens/AuthOrApp'

/*const MenuRoutes = {
    Today:{
        name: 'Today',
        screen: props => <Agenda title='Hoje' daysAhead={0} {...props} />,
        navigationOptions:{
            title: 'Hoje'
        }
    },
    Tomorrow:{
        name: 'Tomorrow',
        screen: props => <Agenda title='Amanhã' daysAhead={1} {...props} />,
        navigationOptions:{
            title: 'Amanhã'
        }
    },
    Week:{
        name: 'Week',
        screen: props => <Agenda title='Semana' daysAhead={7} {...props} />,
        navigationOptions:{
            title: 'Semana'
        }
    },
    Month:{
        name: 'Month',
        screen: props => <Agenda title='Mês' daysAhead={30} {...props} />,
        navigationOptions:{
            title: 'Mês'
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Today',
    contentComponent:Menu,
    contentOptions: {
        labelStyle:{
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle:{
            color: '#080'
        }
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes,MenuConfig)
*/


const MainRoutes = {
/*    Loading: {
        name: 'Loading',
        screen: AuthOrApp
    }, */
    Auth:{
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: Racha
    }
}

const MainNavigator = createSwitchNavigator(MainRoutes, { initialRouteName: 'Home'})

export default MainNavigator