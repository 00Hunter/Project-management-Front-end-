import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";

import color from "../color";
import Chip from "../Components /Chip";

import { useSelector, useDispatch } from "react-redux";
import { addProject } from "../redux/project";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ion from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-paper";
import CheckBox from "expo-checkbox";
import { addTasks, UpdateTasks } from "../redux/tasks/tasks";

// import DateTimePicker from '@react-native-community/datetimepicker';

const list = ["Important", "Urgent", "Not Important", "Not Urgent"];
export default function CreateTaskScreen({ navigation }) {
  const entities = useSelector((state) => state);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [text, setText] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios"); // Close the picker on iOS
    setDate(currentDate);
    setuserProjects({
      ...userProjects,
      DueDate: JSON.stringify(currentDate),
      Completed: false,
    });
  };

  const handleOnSubmitEditing = () => {
    // console.log("Input submitted:", text);
    setTask({
      ProjectName: userProjects.Project,
      Task: text,
      Completed: false,
    });
    // Add more logic or API calls if needed
    setText();
  };

  const [userProjects, setuserProjects] = useState({
    Project: "",
    DueDate: "",
    Descrip: "",
    Tags: "",
    Completed: "",
  });
  const [Task, setTask] = useState({
    ProjectName: "",
    Task: "",
    Completed: "",
  });

  const filteredTask = entities.Task.filter(
    (item) => item.ProjectName === userProjects.Project
  );

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <View style={styles.TitleContainer}>
        <Text style={styles.title} on>
          Create Task
        </Text>
      </View>
      <View style={styles.heading}>
        <Text style={{ fontSize: 15, marginLeft: 10 }}>Task Title </Text>
        <View style={styles.textInput}>
          <TextInput
            onChangeText={(text) => {
              setuserProjects({ ...userProjects, Project: text });
            }}
            placeholder="Task"
            style={{ padding: 10, fontSize: 15 }}
          ></TextInput>
        </View>
      </View>
      <View style={styles.date}>
        <View>
          <Icon
            name={"calendar"}
            size={24}
            color={color.DarkBlue}
            onPress={() => setShowPicker(true)}
          />
          <TouchableOpacity
            onPress={() => setShowPicker(true)}
          ></TouchableOpacity>
          {showPicker && (
            <DateTimePicker
              value={date}
              mode="date" // Change to "time" for time picker
              is24Hour={true}
              display="spinner"
              onChange={onChange}
            />
          )}
        </View>
      </View>
      <View>
        <Button
          title="Tasks"
          onPress={() => {
            setVisible(true);
          }}
        ></Button>
      </View>
      <View style={styles.tags}>
        {list.map((item, index) => {
          return (
            <Chip
              title={item}
              onPress={() => {
                setuserProjects({ ...userProjects, Tags: list[index] });
              }}
            ></Chip>
          );
        })}
      </View>
      <View style={styles.disbox}>
        <TextInput
          style={{
            height: 200,
            width: "95%",
            backgroundColor: color.LightBlue,
            padding: 10,
          }}
          placeholder="Description"
          onChangeText={(text) => {
            setuserProjects({ ...userProjects, Descrip: text });
          }}
        ></TextInput>
      </View>
      <Button
        title="add"
        onPress={() => {
          dispatch(addProject(userProjects));
          navigation.navigate("TaskList");
        }}
      ></Button>

      {/* //Modal to add tasks  */}
      <Modal visible={isVisible}>
        <View style={styles.modal}>
          <View style={styles.modalInputContainer}>
            <TextInput
              mode="outlined"
              outlineColor={color.Grey}
              activeOutlineColor={color.DarkBlue}
              style={styles.modalInput}
              onChangeText={(text) => setText(text)}
              onSubmitEditing={handleOnSubmitEditing}
            />

            <Ion
              name="add-outline"
              size={24}
              onPress={() => {
                dispatch(addTasks(Task));
                // setText();
              }}
            ></Ion>

            {entities.Task && entities.Task.length > 0 ? (
              filteredTask.map((item, index) => {
                // console.log(item);
                return (
                  <View>
                    <CheckBox value={entities.Task.Completed} style={{}} />
                    <Text>{item.Task}</Text>
                  </View>
                );
              })
            ) : (
              <Text>Add Something please</Text>
            )}
            <Button
              title="Done Adding "
              onPress={() => {
                setVisible(false);
                setTask();
              }}
            ></Button>
          </View>
        </View>
      </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Grey,
  },
  calendar: {
    marginRight: 20,
  },
  date: {
    marginTop: 20,
    margin: 10,
    flexDirection: "row",
  },
  disbox: {
    alignItems: "center",
    padding: 5,
    marginTop: 50,
  },
  heading: {
    marginTop: 30,
  },
  modal: {
    // backgroundColor:"",
    flex: 1,
    borderRadius: 5,
  },
  modalInputContainer: {
    marginTop: 100,
    marginLeft: 10,
    // backgroundColor:color.Cream,
    height: 60,
    width: "95%",
    borderColor: color.LightBlue,
  },
  modalInput: {
    height: 60,
    fontSize: 40,
    backgroundColor: color.LightBlue,
    // fontSize:20,
    // alignSelf:"center"
  },

  TitleContainer: {
    alignItems: "center",
    marginTop: 40,
    // marginVertical:20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    height: 50,
    margin: 10,
    backgroundColor: color.LightBlue,
    borderRadius: 10,
    opacity: 0.7,
    shadowColor: color.DarkBlue,
  },
  tags: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
