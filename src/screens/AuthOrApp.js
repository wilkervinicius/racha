import React, {Component} from 'react'
import {
    View,
    ActivityIndicator,
    AsyncStorage
}from  'react-native'
import axios from 'axios'

export default class AuthOrApp extends Component {
    componentWillMount = async() =>{
        const json = await AsyncStorage.getItem('userData')
        const userData = JSON.parse(json) || {}


        if(userData.token){
            axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`
            this.props.navigation.navigate('Home',userData)
        }else{
            this.props.navigation.navigate('Auth')
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <ActivityIndicator size={30}></ActivityIndicator>
            </View>
        )
    }
}