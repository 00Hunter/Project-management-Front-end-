import React from 'react'
import  { View,StyleSheet ,TouchableOpacity}  from 'react-native'

export default function Cards ({onpress}){
    return (
        <TouchableOpacity onPress={onpress}>
        <View style={styles.container}>
        </View>
        </TouchableOpacity>
       
    )
}

const styles=StyleSheet.create({
    container:{
        height:150,
        width:150,
        borderRadius:10,
        backgroundColor:"#E5E1DA",
        
    }
})
