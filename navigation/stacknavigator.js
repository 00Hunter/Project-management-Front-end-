import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreateTaskScreen from '../Screens/CreateTaskScreen';
import TaskDashboard from '../Screens/TaskDashboard';
import ReportScreen from '../Screens/ReportScreen';
import TaskScreen from '../Screens/TaskScreen';

const Stack=createNativeStackNavigator();

const ScreenNavigation=()=>{
    return(
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="TaskList" component={TaskDashboard}/>
        <Stack.Screen name="CreateTask" component={CreateTaskScreen}/>
        <Stack.Screen name="Task" component={TaskScreen}/>

    </Stack.Navigator>
    )
}

export default ScreenNavigation;