import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
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
  // console.log(entities.Project);

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
    <View style={styles.container}>
      <View>
        <ScrollView horizontal={true}>
          <TaskDashBoardHeader title={`Completed ${CompletedTask}`} />
          <TaskDashBoardHeader title={`Left ${NotCompleted}`} />
        </ScrollView>
      </View>

      <View style={styles.list}></View>
      <ScrollView>
        {entities.Project && entities.Project.length > 0 ? (
          entities.Project.map((i, index) => {
            console.log(i);
            return (
              <TaskCard
                text={i.Project}
                tag={i.Tags}
                date={i.DueDate}
                onPressDelete={() => {
                  dispatch(removeTask(i.id));
                }}
                onPress={() => {
                  // console.log(i.id);
                  navigation.navigate('Task',{taskData:i});
                  // dispatch(UpdateProject(i.id));
                }}
              />
            );
          })
        ) : (
          <Text>Add some task</Text>
        )}
      </ScrollView>
      <View style={styles.addbutton}>
        <AddButton
          onpress={() => navigation.navigate("CreateTask")}
        ></AddButton>
        <View />
      </View>
    </View>
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
    flexDirection: "column",
    justifyContent: "flex-end",
    // backgroundColor:"#000000"
  },
  list: {
    marginTop: 30,
  },
});
