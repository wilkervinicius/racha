import React, {Component} from 'react'
import {
    Modal,
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert
} from 'react-native'
import commonStyles from '../commonStyles'

const initialState = {name: '', joinAt:false}


export default class AddRacha extends Component{
    state = {...initialState}

    save = () => {
        if (!this.state.name.trim()){
            Alert.alert('Dados Invalidos','Informe nome de um Racha')
            return
        }
        const date = {...this.state}
        this.props.onSave(data)
        this.setState({...initialState})
    }


    render(){
        return(
            <Modal onRequestClose={this.props.onCancel}
                visible = {this.props.isVisible}
                animationType = 'slide' transparent={true}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offSet}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Novo Racha</Text>
                    <TextInput placeholder='Nome...' style={styles.input} onChangeText={this.setState({name})}
                        value={this.state.name} />                
                     <View style={{flexDirection: 'row',justifyContent: 'flex-end'}}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>onCancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                     </View>                   
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offSet}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }


}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        justifyContent:'space-between'
    },
    offSet:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',

    },
    button:{
        margin:20,
        marginRight: 30,
        color: commonStyles.colors.default,
    },
    header:{
        fontFamily:commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.default,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding : 15,
        fontSize: 15,
    },
    input:{
        fontFamily: commonStyles.fontFamily,
        width:'90%',
        heigth: 40,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6
    }

})  