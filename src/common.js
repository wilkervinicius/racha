import { Alert, Platform } from 'react-native'



const server = Platform.OS === 'ios' ?
    'http://localhost:8000' : 'http://10.0.2.2:8000'

function showError(erro){
    Alert.alert('Error',`${erro}`)
}

export{
    showError, server
}
