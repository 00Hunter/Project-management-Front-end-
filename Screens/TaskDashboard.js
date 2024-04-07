import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Touchable, StatusBar, SafeAreaView } from "react-native";
import TaskCard from "../Components /TaskCard";
import AddButton from "../Components /AddButton";

import { useSelector, useDispatch } from "react-redux";
import { removeTask, UpdateProject, UpdateTask } from "../redux/project";
import TaskDashBoardHeader from "../Components /TaskDashBoardHeader";
import { useFocusEffect } from "@react-navigation/native";

export default function TaskDashboard({ navigation }) {
  const [task, setTask] = useState([]);
  const [CompletedTask, setCompletedTask] = useState();
  const [NotCompleted, setNotCompleted] = useState();
  const dispatch = useDispatch();

  const entities = useSelector((state) => state);
  // console.log(entities.Project[0])

  function handleDelete(index) {
    dispatch(removeTask(index));
  }
  //counting the types of task completed , not completed , missed
  function getCount() {
    let counter = 0;
    let totalcount = 0;

    entities.Project.map((item, index) => {
      totalcount++;
      if (item.Completed === false) {
        counter++;
      }
    });
    setNotCompleted(counter);
    setCompletedTask(totalcount - counter);
  }

  // useEffect(()=>{
  //   getCount();
  // })

  useFocusEffect(
    React.useCallback(() => {
      getCount();
    })
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <Text style={{fontSize:35,flex:1,marginLeft:10}}>Welcome</Text>
      <View style={{marginLeft:10}}>
      <AddButton text={'Create'} onpress={() => navigation.navigate("CreateTask")}/>
      </View>
      </View>
      <View style={{margin:10}} >
        <ScrollView horizontal={true}>
          <TaskDashBoardHeader title={`Completed ${CompletedTask}`} />
          <TaskDashBoardHeader title={`Left ${NotCompleted}`} />
        </ScrollView>
      </View>
      <View style={styles.list}></View>
      <ScrollView>
        {entities.Project && entities.Project.length > 0 ? (
         entities.Project.map((item,index)=>{
          console.log(entities.Project[index].DueDate)
          return (
  <TaskCard
  key={index}
    text={entities.Project[index].Project}
    tag={entities.Project[index].Tags}
    date={entities.Project[index].DueDate}
    onPressDelete={() => {
      dispatch(removeTask(i.id));
    }}
    onPress={() => {
      // console.log("helpop[ppppppppppp"+i);
      navigation.navigate('Task',{taskData:entities.Project[index]});

      // dispatch(UpdateProject(i.id));
    }}
  />
);
         })
        ) : (
          <Text>Add some task</Text>
        )}
      </ScrollView>
   </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  addbutton: {
    position: "absolute",
    alignSelf: "flex-end",
    padding: 20,
  },
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight+10,
    flexDirection: "column",
    justifyContent: "flex-end",
    // backgroundColor:"#000000"
  },
  list: {
    marginTop: 30,
  },
});

