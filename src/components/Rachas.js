import React from 'react'
import {
    StyleSheet, 
    View, 
    Text,
    TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyle from '../commonStyles'
import Swipeable from 'react-native-swipeable'


//icon:futbol, share-alt
export default props => {
    let check = false
    if (props.joinAt !== null) {
        check = (            
            <Icon name="share-alt" size={20} />
        )
    } else {
  
        check = (
            <Icon name="share-alt" size={20} color="#0000ff"/>
            
        )
    }  
  /*
    const descStyle = props.joinAt !== null ?
    {  fontWeight: 'bold', color: 'blue' } : {}

  */
    const leftContent = (
        <View style={styles.exclude}>
            <Icon name='trash' size={20} color='#FFF' />
            <Text style={styles.excludeText}>Excluir</Text>
        </View>
    )
  /*
    const rightContent = [
        <TouchableOpacity
            style={[styles.exclude, { justifyContent: 'flex-start', paddingLeft: 20 }]}
            onPress={() => props.onDelete(props.id)}>
            <Icon name='trash' size={30} color='#FFF' />
        </TouchableOpacity>,
    ] */
    return(
        <Swipeable leftActionActivationDistance={200}
            onLeftActionActivate={() => props.onDelete(props.id)}
            leftContent={leftContent}>
          <View style={styles.container}>
            <View>
                <Text style={styles.description}>
                    {props.nome}
                </Text>
            </View>
           
            <TouchableWithoutFeedback onPress={() =>props.toggleRacha(props.id)}>
                <View style={styles.checkJoin}>
                    {check}                
                </View>
            </TouchableWithoutFeedback>
           
     	  </View>
        </Swipeable>
    )

}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA',
        
        },
    checkJoin: {
        flex:1,
        marginRight:20,
        height:25,
        alignItems: 'flex-end',
        justifyContent: 'center',
       
    },   
    description:{
        fontFamily: commonStyle.fontFamily,
        color: commonStyle.colors.mainText,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue'
        
    },
    exclude: {
        
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }, 
    excludeText: {
        fontFamily: commonStyle.fontFamily,
        color: '#FFF',
        fontSize: 20,
        margin: 10,
    }  

})
