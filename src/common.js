import { Alert, Platform } from 'react-native'



const server = Platform.OS === 'ios' ?
    'http://localhost:8000' : 'https://backend-racha.herokuapp.com'

function showError(erro){
    Alert.alert('Error',`${erro}`)
}

export{
    showError, server
}
