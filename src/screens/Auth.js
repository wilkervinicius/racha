import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert,

} from 'react-native'
import commonStyles from '../commonStyles'
import backgroundImage from '../../assets/imgs/login3.jpg'
import axios from  'axios'
import { server, showError } from '../common';

export default class Auth extends Component {
    state={
        stageNew: false,
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    signinOrSignup = async () => {
        if (this.state.stageNew){
            try {
                await axios.post(`${server}/users/`,{
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword
                })
                Alert.alert('Sucesso!','Usuário Cadastrado')
                this.setState({stageNew: false})    
            } catch (err) {
                showError(err)
            }
            
        } else {
            try{
                const res = await axios.post(`${server}/api-token-auth/`,{
                    username: this.state.username,
                    password: this.state.password
                })
                console.log(res)
                axios.defaults.headers.common['Authorization'] = `Token ${res.data.token}`
                this.props.navigation.navigate('Home') 
            } catch (err) {
                Alert.alert('Erro','Falha no Login')
                showError(err)
                console.log(err)

            }
          
        }
    }
    render(){
        return (
            <ImageBackground source = {backgroundImage} style={styles.background}>
                <Text style={styles.title}>Racha</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Crie a sua conta' : 'Inform seus dados'}
                    </Text>
                    {this.state.stageNew && 
                        <TextInput placeholder='E-mail' style={styles.input} value={this.state.email} 
                            onChangeText={email => this.setState({email})}/>}
                    <TextInput placeholder = 'Login' style = {styles.input} value = {this.state.username}
                        onChangeText = {username => this.setState({username})} />
                    <TextInput placeholder = 'Senha' style = {styles.input} value = {this.state.password}
                        onChangeText = {password => this.setState({password})} /> 
                    {this.state.stageNew &&
                        <TextInput placeholder = 'Confirma senha' style = {styles.input} value = {this.state.confirmPassword}
                    onChangeText = {confirmPassword => this.setState({confirmPassword})} />}
                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style ={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>

                        </View>
                    </TouchableOpacity>        
                </View>
                <TouchableOpacity style={{ padding: 10}} onPress={() => this.setState({stageNew: !this.state.stageNew})}>
                        <Text style={styles.buttonText}>
                            {this.state.stageNew ? 'Ja possui conta? ': 'Ainda não possui conta'}
                        </Text>

                </TouchableOpacity>
            </ImageBackground>
        )
    } 
}  



const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 70,
        marginBottom: 10,
        
    },
    subtitle:{
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize:20,
    },
    
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%',
        borderRadius: 10
    },
    input: {
        marginTop: 10, 
        backgroundColor: '#FFF'
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
