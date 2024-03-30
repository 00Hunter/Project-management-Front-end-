import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CheckBox from "expo-checkbox";
import { useSelector, useDispatch } from 'react-redux';
import { UpdateTasks } from '../redux/tasks/tasks';

export default function TaskScreen({ route }) {
    const entities = useSelector((state) => state);
    const dispatch = useDispatch();
    const data = route.params;
    const filteredTasks = entities.Task.filter((item) => item.ProjectName === data.taskData.Project);

    const [percentCompleted, setPercentCompleted] = useState(0);

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
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{data.taskData.Project}</Text>
                <Text style={styles.percentCompleted}>{percentCompleted}% Completed</Text>
            </View>

            <View style={styles.taskDetails}>
                <Text style={styles.label}>Description:</Text>
                <Text>{data.taskData.Descrip}</Text>
                <Text style={styles.label}>Due Date:</Text>
                <Text>{data.taskData.DueDate}</Text>
                <Text style={styles.label}>Tags:</Text>
                <Text>{data.taskData.Tags}</Text>
            </View>

            <View style={styles.taskList}>
                {filteredTasks.map((task, index) => (
                    <View key={index} style={styles.task}>
                        <CheckBox
                            value={task.Completed}
                            color={task.Completed ? '#4630EB' : undefined}
                            onValueChange={() => {
                                dispatch(UpdateTasks(task.id));
                                calculatePercentCompleted();
                            }}
                        />
                        <Text>{task.Task}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    percentCompleted: {
        fontSize: 16,
        color: '#888',
    },
    taskDetails: {
        marginBottom: 20,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    taskList: {
        flex: 1,
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
});
