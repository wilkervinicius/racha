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

//icon:futbol, share-alt
export default props => {
    let check = false
    if (props.joinAt !== true) {
        check = (            
            <Icon name="share-alt" size={20} />
        )
    } else {
  
        check = (
            <Icon name="share-alt" size={20} color="#0000ff"/>
            
        )
    }  
  
  
    return(
   
        <View style={styles.container}>
            <View>
                <Text style={styles.description}>
                    {props.name}
                </Text>
            </View>
           
            <TouchableWithoutFeedback onPress={() =>props.toggleRacha(props.id)}>
                <View style={styles.checkJoin}>
                    {check}                
                </View>
            </TouchableWithoutFeedback>
           
        </View>
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
        fontSize: 15,
        
    }
})