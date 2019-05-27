import React, {Component} from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Platform,
    
}
from 'react-native'
import axios from  'axios'
import moment from 'moment'
import 'moment/locale/pt-br'
import racha from '../../assets/imgs/racha.jpg'
import commonStyles from '../commonStyles'
import Rachas  from '../components/Rachas'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActionButton from 'react-native-action-button'
import AddRacha from './AddRachas'
import { showError, server } from '../common';

            

export default class Racha extends Component{
    
    state = {
        rachas:[],
        visibleRachas:[],
        showJoinRachas: true,
        showAddRacha:false,
    }

    addRacha = async racha =>{
       try{ 
           await axios.post(`${server}/racha/`,{
               nome: racha.nome,
             //  descricao: rachas.descricao
           })
           this.setState({showAddRacha:false}, this.loadRachas)

       } catch (err) {
            showError(err)
       }
    }
    
    deleteRacha = async id => {
    	 try { 
              await axios.delete(`${server}/racha/${id}/`)
              await this.loadRachas()

         } catch (err) {
            showError(err)
         }
    
    } 		

    filterRachas = () => {
        let visibleRachas = null
        if (this.state.showJoinRachas){
            visibleRachas = [...this.state.rachas]
        } else{
            //const onJoin = racha => racha.joinAt === true
            //visibleRachas = this.state.rachas.filter(onJoin)
            visibleRachas = [...this.state.rachas]
            
        }
        this.setState({visibleRachas})
        
    }

    
    toggleFilter = () => {
        this.setState({showJoinRachas: !this.state.showJoinRachas},
            this.filterRachas)
    }

    componentDidMount = () => {
        this.loadRachas();
    }


    toggleRacha = id => {
        const rachas = this.state.rachas.map(racha =>{
            if (racha.id == id){
              racha = {...racha}
           //   racha.joinAt = racha.joinAt ? false: true 
            }
            return racha
        })
        this.setState({rachas},this.filterRachas)
        

    }
    
    loadRachas = async () => {
        try {
            res = await axios.get(`${server}/racha/`)
            this.setState({rachas: res.data}, this.filterRachas)
        } catch (err){
            showError(err)
        }    
    }
    
    render(){
        return(
            <View style={styles.container}>
                <AddRacha isVisible={this.state.showAddRacha}
                    onSave={this.addRacha}
                    onCancel={() => this.setState({ showAddRacha: false })} /> 
              
                <ImageBackground source={racha} style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showJoinRacha ? 'eye': 'eye-slash'} 
                                size={20} color={commonStyles.colors.secondary}/>    
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Racha</Text>
                        <Text style={styles.subTitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.rachasContainer}>
                    <FlatList data={this.state.visibleRachas}
                        keyExtractor={item => `${item.id}`}   
                        renderItem={({ item }) => 
                        <Rachas {...item} toggleRacha={this.toggleRacha}
                                onDelete={this.deleteRacha}/>}/> 
                 <ActionButton buttonColor={commonStyles.colors.today}
                    onPress={() => { this.setState({ showAddRacha: true }) }} />   
                </View>
                
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    background:{
        flex:3,
    },
    titleBar:{
        flex:1,
        justifyContent:'flex-end',
    },
    title:{
        fontFamily:commonStyles.fontFamily,
        color:commonStyles.colors.secondary,
        fontSize:50,
        marginLeft:20,
        marginBottom:10,
    },
    subTitle:{
        fontFamily:commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize:20,
        marginLeft:20,
        marginBottom:30,
    },
    rachasContainer:{
        flex:7,

    },
    iconBar:{
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',   
    },
})
