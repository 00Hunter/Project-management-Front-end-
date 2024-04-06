import React from 'react'
import {View,StyleSheet,Text, TouchableHighlight    ,TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import color from '../color';
import TaskCardChip from './TaskCardChip';
import task from '../redux/project';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colorGen from '../colorGen';



export default function TaskCard({date,onPressDelete,tag,text,onPress}) {
    
    
  return (
   
    // <View style={styles.container}>
    <TouchableHighlight 
    activeOpacity={0.6}
    underlayColor={color.LightBlue}
    onPress={onPress}
    style={styles.taskhead}
>
    
        <View style={styles.container}>
            <View style={styles.header}>
            <View style={styles.textbox}>
            <Text style={styles.text}>{text}</Text>
            </View>
            <View>
            <TouchableOpacity onPress={onPressDelete}>
            <MaterialIcons name="more-horiz" size={24} color="black" />
            </TouchableOpacity>
            </View>
            </View> 
            <View style={styles.tags}>
            <TaskCardChip title={tag}/>
            </View>
            <View style={styles.date}>
            <Icon name={'calendar'} size={24} color={"black"} />
                <Text style={{fontSize:13,marginLeft:15}}>{date}</Text>
            </View>
        </View>
       

        </TouchableHighlight>

    
  )
}

const styles=StyleSheet.create({
    container:{
        // margin:10
        // flex:1,
        // flexDirection:"row",
    },
    date:{
        flexDirection:"row",
        marginTop:10
    },
    header:{
        flexDirection:"row"
    },
    text:{
        fontWeight:"bold",
        fontSize:17,
        
    },
    textbox:{
       flex:1
    },
   taskhead:{
    margin:7,
    // flex:1,
    marginHorizontal:5,
    height:130,
    borderWidth:1,
    borderColor:"black",
    padding:10,
    width:"97%",
    // flexDirection:"row",
    borderRadius:10
    // backgroundColor:"black"
   },
   tags:{
    marginTop:5
   }

})
