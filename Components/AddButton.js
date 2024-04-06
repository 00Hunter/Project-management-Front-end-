import React from 'react'
import { View,StyleSheet, TouchableOpacity ,Text} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import colors from '../color'

export default function AddButton({onpress,text}) {
  return (
    <View style={{backgroundColor:"black",width:85,height:30,marginRight:10,borderRadius:20}}>
    <TouchableOpacity onPress={onpress}>
      <Text style={{color:"white", fontSize:13,alignSelf:"center",marginTop:4}}>{text}</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles=StyleSheet.create({
    container:{

    }
})
