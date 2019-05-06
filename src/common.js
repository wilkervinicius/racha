import { Alert } from 'react-native'
function showError(erro){
    Alert.alert('Error',`${erro}`)
}

export{
    showError
}