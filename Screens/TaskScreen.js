import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView ,TextInput,StatusBar} from 'react-native';
import CheckBox from "expo-checkbox";
import { useSelector, useDispatch } from 'react-redux';
// import moment from 'moment';

import color from '../color';
import Ion from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import moment from 'moment'
import { addTasks, UpdateTasks } from "../redux/tasks/tasks";
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from '../Components /ProgessBar';



export default function TaskScreen({ route }) {

    const entities = useSelector((state) => state);
    const dispatch = useDispatch();
    const [text, setText] = React.useState("");
    const data = route.params;
    const str = data.taskData.DueDate;
    const [convertedDate,setConvertedDate]=useState(moment(Date(str)).format('MMMM Do YYYY, h:mm:ss'));
    // console.log(Date(str));
    let filteredTasks = entities.Task.filter((item) => item.ProjectName === data.taskData.Project);
        // console.log(entities.Project)

    const [percentCompleted, setPercentCompleted] = useState(0);

    const [Task, setTask] = useState({
        ProjectName: "",
        Task: "",
        Completed: "",
      });
      
      

    const handleOnSubmitEditing = () => {
   
        setTask({
          ProjectName:data.taskData.Project ,
          Task: text,
          Completed: false,
        });
        // Add more logic or API calls if needed
        setText();
      };

    useEffect(() => {
        calculatePercentCompleted();
    }, [filteredTasks]);

    const calculatePercentCompleted = () => {
        if (filteredTasks.length === 0) {
            setPercentCompleted(0);
            return;
        }

        const completedTasks = filteredTasks.reduce((acc, curr) => {
            return curr.Completed ? acc + 1 : acc;
        }, 0);

        const percentage = (completedTasks / filteredTasks.length) * 100;
        setPercentCompleted(percentage.toFixed(2));
    };

    return (
        <SafeAreaView style={styles.container}>
             <AntDesign name='arrowleft' size={24} color={"black"}></AntDesign>

            <View style={styles.header}>
                <Text style={styles.headerText}>{data.taskData.Project}</Text>
            </View>

            <View style={{borderWidth:2,borderRadius:5,marginBottom:"15%"}}>
            <View style={styles.taskDetails}>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.label}>Description:</Text>
                <Text style={{color:"black",fontSize:20,alignSelf:"center",fontWeight:"bold"}}>{data.taskData.Descrip}</Text>
                </View>

                <View style={{flexDirection:"row"}}>
                <Text style={styles.label}>Due Date:</Text>
                <Text style={{color:"black",alignSelf:"center",fontSize:20,fontWeight:"bold"}}>{convertedDate}</Text>
                </View>

                <View style={{flexDirection:"row"}}>
                <Text style={styles.label}>Tags:</Text>
                <Text style={{color:"black",alignSelf:"center",fontSize:20,fontWeight:"bold"}} >{data.taskData.Tags}</Text>
                </View>
            </View>
            </View>
            <ProgressBar percentage={percentCompleted}></ProgressBar>
            <View style={styles.taskList}>
            <View style={{flexDirection:"row",height:40,borderWidth:1,borderRadius:5,margin:1,borderWidth:3}}>
            <View style={{height:"100%",width:2,backgroundColor:"black",marginLeft:"10%"}}></View>
            <Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold",marginLeft:10}}>Tasks</Text>
            </View>
<ScrollView>
         {filteredTasks && filteredTasks.length>0?
               (filteredTasks.map((task, index) => (
                    <View style={{flexDirection:"row",flex:1,borderWidth:1,borderRadius:5,margin:1}}>
                        <CheckBox
                        style={{margin:"2%"}}
                            value={task.Completed}
                            color={task.Completed ? '#000000' : "#000000"}
                            onValueChange={() => {
                                dispatch(UpdateTasks(task.id));
                                calculatePercentCompleted();
                            }}
                        />
                        <View style={{height:"100%",width:1,backgroundColor:"black"}}></View>
                        <View style={{alignContent:"center",alignSelf:"center"}}>
                        <Text style={{color:"black",marginLeft:"5%",fontSize:20,alignSelf:"center"}}>{task.Task}</Text>
                        </View>
                   </View>
                ))
               ):(
                <Text style={{color:"black"}}>Add some task</Text>
               )}
               <View style={{flexDirection:"row"}}>
               <Ion
            color={"black"}
              name="add-outline"
              size={30}
              onPress={() => {
                dispatch(addTasks(Task));
                // setText();
              }}
            ></Ion>
               <TextInput
              mode="outlined"
              placeholder='Task'
              spellCheck={true}
              outlineColor={"black"}
              activeOutlineColor={"black"}
              style={{flexDirection:"row",borderWidth:1,borderRadius:5,margin:1,flex:1,width:"90%",fontSize:20,paddingLeft:20}}
              onChangeText={(text) => setText(text)}
              onSubmitEditing={handleOnSubmitEditing}
            />

           
        </View>
        </ScrollView>
        
            </View>
       
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:10,
        marginTop:StatusBar.currentHeight,
      
    },
    header: {
        width:"100%",
        margin:5,
        // borderRadius:5,
        flexDirection: 'row',
        // justifyContent: 'center',
        marginBottom: 20,
        // borderWidth:2,


    },
    headerText: {
        alignSelf:"center",
        color:"black",
        fontSize: 50,
        fontWeight: 'bold',
    },
    percentCompleted: {
        color:"red",
        fontSize: 20,
        // color: '#888',
    },
    taskDetails: {
        margin:"3%"
    },
    label: {
        fontSize:20,
        // fontWeight: 'bold',
        color:"black",
        marginBottom: 5,
    },
    taskList: {
        marginTop:20,
        flex: 1,
        
    },
    task: {
        flexDirection: 'row',
        color:"black",
        alignItems: 'center',
        marginBottom: 10,
    },
});
