import React from 'react'
import { View,StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import colors from '../color'

export default function AddButton({onpress}) {
  return (
    <TouchableOpacity onPress={onpress}>
   <View style={styles.container}>
   <AntDesign name="pluscircleo" size={60} color={colors.DarkBlue} />
   </View>
   </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    container:{
        marginTop:100,
        marginLeft:100,
        // height:70,
        // width:70,
        // borderRadius:50,
        // borderColor:"black",
        // borderWidth:1
    }
})
