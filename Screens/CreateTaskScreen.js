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

import moment from "moment";
import color from "../color";
import Chip from "../Components /Chip";

import { useSelector, useDispatch } from "react-redux";
import { addProject } from "../redux/project";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ion from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { TextInput } from "react-native-paper";
import CheckBox from "expo-checkbox";
import { addTasks, UpdateTasks } from "../redux/tasks/tasks";
import AddButton from "../Components /AddButton";


const list = ["Important", "Urgent", "Not Important", "Not Urgent"];

export default function CreateTaskScreen({ navigation }) {
  const entities = useSelector((state) => state);
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [dateDisplay,setDateDisplay]=useState(moment().format('llll'));
  const [showPicker, setShowPicker] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios"); // Close the picker on iOS
    setDateDisplay(moment(currentDate).format('llll'))
    setDate(currentDate);
    console.log(date)
    setuserProjects({
      ...userProjects,
      DueDate: JSON.stringify(currentDate),
      Completed: false,
    });
  };

  const handleOnSubmitEditing = () => {
   
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
        <Text style={styles.title} >
          Create Project
        </Text>
        <AddButton text={'Add'} onpress={() =>{
          dispatch(addProject(userProjects));
          navigation.navigate("TaskList")}}/>
      </View>
      <View style={styles.heading}>
        <Text style={{ fontSize: 15, marginLeft: 10,fontWeight:"bold", }}>Project Title </Text>
        <View style={styles.textInput}>
          <TextInput
          style={{
            borderWidth:1,
            borderColor:"black",
            height: 30,
            width: "95%",
            backgroundColor: 'white',
            padding: 10,
            borderRadius:5,
            alignSelf:"center"
          }}
          placeholder="Name"
          onChangeText={(text) => {
            setuserProjects({ ...userProjects, Project: text });
          }}
        ></TextInput>
        </View>
      </View>
      {/* Date component */}

      <View style={{marginTop:40}}>
        <View style={{flexDirection:"row",marginLeft:10}}>
        <Icon
            name={"calendar"}
            size={24}
            color={"black"}
          />
          <Text style={{fontSize:14,marginLeft:'2%',justifyContent:"center"}}>Due Date</Text>
          </View>
            <TouchableOpacity onPress={() => {setShowPicker(true)}} style={{marginLeft:'10%'}}>
              <Text style={{fontSize:20}}>{dateDisplay}</Text>
            </TouchableOpacity>
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
      
      
      <View style={styles.disbox}>
        <View style={{flexDirection:"row",marginLeft:10,marginBottom:7}}>
        <MaterialIcons name="description" size={24}/>
        <Text>Description</Text>
        </View>
        <TextInput
          style={{
            borderWidth:1,
            borderColor:"black",
            height: 130,
            width: "93%",
            backgroundColor: 'white',
            padding: 10,
            borderRadius:5,
            alignItems:"center",
            alignSelf:"center"
          }}
          placeholder="Description"
          onChangeText={(text) => {
            setuserProjects({ ...userProjects, Descrip: text });
          }}
        ></TextInput>
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
      
       
      <View>
        <Button
          title="Tasks"
          onPress={() => {
            setVisible(true);
          }}
        ></Button>
      </View>

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
    backgroundColor: "white",
  },
  calendar: {
    marginRight: 20,
  },
  date: {
    marginTop: 50,
    margin: 10,
    flexDirection: "row",
  },
  disbox: {
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
    height: 60,
    width: "95%",
    borderColor: color.LightBlue,
  },
  modalInput: {
    height: 60,
    fontSize: 40,
    backgroundColor:"black",
  },

  TitleContainer: {
    flexDirection:"row",
    alignItems:"center",
    marginTop: 40,
  },
  title: {
    flex:1,
    fontSize: 30,
    fontWeight: "bold",
  },
  textInput: {
    height: 30,
    marginTop:'2%',
    // margin: 10,
    borderRadius: 10,
    
  },
  tags: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    justifyContent:"center",
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '45%',
  },
  leftInput: {
    marginRight: '5%',
  },
  rightInput: {
    marginLeft: '5%',
  }
});
