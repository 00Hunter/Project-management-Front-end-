

import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from "moment";
import { useSelector } from 'react-redux';
import CalendarCard from './CalendarCard';

export default function CustomCalendar(){

    const [selectedDateTasks, setSelectedDateTasks] = useState(null);
    const entities = useSelector((state) => state);

    function showDateTask(dateString){
        const filteredTasks = entities.Project.filter((project) => {
            const projectDate = moment(JSON.parse(project.DueDate)).format('YYYY-MM-DD');
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
                onDayPress={(day)=>showDateTask(day.dateString)}
            />
            <ScrollView>
            {selectedDateTasks && selectedDateTasks.length > 0 ?
                (
                 
                    selectedDateTasks.map((task, index) => (
                     <ScrollView>
                      <View key={index}>
                            <CalendarCard heading={task.Project} tag={task.Tags}/>
                        </View>
                     </ScrollView>
                        
                    ))
                ) : (
                    <Text>No Tasks</Text>
                )
            }
            </ScrollView>
        </View>
    );
}
