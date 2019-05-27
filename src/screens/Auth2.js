import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity,
    Alert,
    AsyncStorage,
   
} from 'react-native'
import AuthInput from '../components/AuthInput'
import Login from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'
import axios from  'axios'
import {showError,server} from  '../common'

export default class Auth extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        newStage: true,
    }
 
/*   signUp = async () => {
        try {
            await axios.post(`${server}/accounts`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            })
            Alert.alert('Sucesso!', 'Usuário cadastrado')
            this.setState({ newStage: false })
        } catch (err){
            showError(err)
        }
        
    }
    signIn = async() => {
    	try{
            const res = await axios.post('http://10.0.2.2:3000/signin',{
                email: this.state.email,
                password: this.state.password
            })
            AsyncStorage.setItem('userData',JSON.stringify(res.data))
            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            this.props.navigation.navigate('Home')
        }catch(err){
            showError(err)
        
    }

    signOrSignup = () => {
       cod
       if(this.state.newStage){
           this.signUp()
       }else{
           this.signIn()
       } 
    }

*/
    render() {
        let validations = []
        validations.push(this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >= 6)

        if(this.state.newStage){
            validations.push(this.state.name && this.state.name.trim())
            validations.push(this.state.confirmPassword)
            validations.push(this.state.password === this.state.confirmPassword)
        }

        const validForm = validations.reduce((acum,v) => acum && v)

        return (

            <View style={styles.container}>
                <ImageBackground source={Login} style={styles.image}>
                    <View style={styles.subContainer}>
                        <Text style={styles.title}>Racha</Text>
                        <View style={styles.containerForms}>
                            <Text style={styles.instruction}>{this.state.newStage ? 'Crie a sua conta' : 'Informe seus dados'}</Text>
                            {this.state.newStage && <AuthInput icon='user' placeholder='Nome'
                                style={styles.input}
                                value={this.state.name}
                                onChangeText={name => this.setState({ name })} />}
                            <AuthInput icon='at' placeholder='E-mail'
                                style={styles.input}
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })} />
                            <AuthInput icon='lock' placeholder='Senha'
                                secureTextEntry={true}
                                style={styles.input}
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })} />
                            {this.state.newStage && <AuthInput icon='asterisk' placeholder='Confirmação'
                                secureTextEntry={true}
                                style={styles.input}
                                value={this.state.confirmPassword}
                                onChangeText={confirmPassword => this.setState({ confirmPassword })} />}
                            <TouchableOpacity disabled={!validForm} onPress={}> 
                                <View style={[styles.button,!validForm ? {backgroundColor: '#AAA'} : {} ]}>
                                    <Text style={styles.buttonText}>{this.state.newStage ? 'Registrar' : 'Entrar'}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.setState({ newStage: !this.state.newStage })}>
                            <Text style={styles.buttonText}>{this.state.newStage ? 'Já possui conta?' : 'Ainda não possui conta?'}</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    subContainer: {
        alignItems: 'center',

    },
    title: {
        color: '#FFF',
        fontSize: 50,
        fontFamily: commonStyles.fontFamily
    },
    containerForms: {
        width: '90%',
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 10
    },
    instruction: {
        color: '#FFF',
        fontFamily: commonStyles.fontFamily,
        fontSize: 25
    },
    input: {
        marginTop: 10,
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',

    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
    }
})
