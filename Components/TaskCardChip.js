import React from 'react'
import {View,StyleSheet,Text, TouchableOpacity,TouchableHighlight} from 'react-native'
import color from '../color'

export default function TaskCardChip({onPress,title,isPressed}) {
  
  return (
    <TouchableOpacity underlayColor={color.Grey} style={styles.container} onPress={onPress}>
        <Text style={{fontSize:12}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    container:{
      // backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        height:30,
        width:90,
        margin:10,
        borderRadius:15,
        backgroundColor:color.DarkBlue
    },

})
