//have to fix if i change month then all project should disappear;
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from "moment";
import { useSelector } from 'react-redux';
import CalendarCard from './CalendarCard';
import { PastelColors } from '../pastelColor';

export default function CustomCalendar(){

    const [selectedDateTasks, setSelectedDateTasks] = useState(null);
    const [dateSelected,setDateSelected]=useState();
    const [cardColors, setCardColors] = useState([]);
    const entities = useSelector((state) => state);

    function showDateTask(dateString){
        const filteredTasks = entities.Project.filter((project) => {
            const projectDate = moment(JSON.parse(project.DueDate)).format('YYYY-MM-DD');
            setDateSelected(moment(dateString).format("MMM Do YY"))
            return projectDate === dateString;
        });
        setSelectedDateTasks(filteredTasks);
    }

    function marked(){
        const obj = {};
        entities.Project.forEach((project, index) => {
            const date = JSON.parse(project.DueDate);
            const datee = moment(date).format('YYYY-MM-DD');
            obj[datee] = { marked: true };
        });
        return obj;
    }

    return (
        <View>
            <Calendar
                markedDates={marked()}
                disableAllTouchEventsForDisabledDays={true}
                onDayPress={(day)=>{showDateTask(day.dateString)
                console.log(day.dateString)}}
            />
            <View>
                <Text style={styles.date}>{dateSelected}</Text>
            </View>
            <ScrollView>
            {selectedDateTasks && selectedDateTasks.length > 0 ?
                (
                    selectedDateTasks.map((task, index) => (
                      <View key={index}>
                            <CalendarCard  heading={task.Project} tag={task.Tags}/>
                        </View>
                    ))
                ) : (
                    <Text>No Tasks</Text>
                )
            }
            </ScrollView>
        </View>
    );
}

const styles=StyleSheet.create({
    date:{
        fontSize:20,
        padding:10
    }
})
