import React from 'react'
import { View,TouchableOpacity,StyleSheet,Text, ScrollView } from 'react-native'
import color from '../color'

export default function TaskDashBoardHeader({onPress,title}) {
  return (
       <TouchableOpacity underlayColor={color.Grey} style={styles.container} onPress={onPress}>
        <Text style={{padding:10,fontSize:15,color:"white"}}>{title}</Text>
        </TouchableOpacity>
  )
}


const styles=StyleSheet.create({
    container:{
          marginLeft:10,
          alignItems:"center",
          height:47,
          width:110,
         
          borderRadius:25,
          backgroundColor:"black"
      },
})