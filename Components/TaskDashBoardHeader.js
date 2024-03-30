import React from 'react'
import { View,TouchableOpacity,StyleSheet,Text, ScrollView } from 'react-native'
import color from '../color'

export default function TaskDashBoardHeader({onPress,title}) {
  return (
       <TouchableOpacity underlayColor={color.Grey} style={styles.container} onPress={onPress}>
        <Text style={{padding:10,fontSize:10}}>{title}</Text>
        </TouchableOpacity>
  )
}


const styles=StyleSheet.create({
    container:{
        marginTop:100,
          justifyContent:"center",
          alignItems:"center",
          height:50,
          width:130,
          margin:10,
          borderRadius:25,
          backgroundColor:color.DarkBlue
      },
})