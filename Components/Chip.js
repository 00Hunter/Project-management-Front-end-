import React from 'react'
import {View,StyleSheet,Text, TouchableOpacity,TouchableHighlight} from 'react-native'
import color from '../color'

export default function Chip({onPress,title,isPressed,styleprop}) {
  
  return (
    <TouchableOpacity underlayColor={color.Grey} style={[styles.container,styleprop]} onPress={onPress}>
        <Text style={{padding:10,color:"white"}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    container:{
      // backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        height:40,
        width:160,
        margin:10,
        borderRadius:15,
        // backgroundColor:color.DarkBlue
        backgroundColor:"black"
    },

})
