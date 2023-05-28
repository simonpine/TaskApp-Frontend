import { Text, FlatList, StyleSheet, RefreshControl } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import TaskItem from './taskItem'
import { getTasks } from '../api'
import { useIsFocused } from '@react-navigation/native'

const TaskList = () => {
    const isFocused = useIsFocused()
    const [loading, setLoading] = useState(false)
    const [tasks, setTasks] = useState([])

    const loadTasks = async () => {
        const data = await getTasks()
        setTasks(data)
    }
    useEffect(() => {
        loadTasks()
    }, [isFocused])
    const onRefresh = useCallback(async () => {
        setLoading(true);
        await loadTasks();
        setLoading(false);
    })
    return (
        <FlatList style={styles.tasksContainer}
            data={tasks}
            keyExtractor={item => item.id + ''}
            refreshControl={
                <RefreshControl onRefresh={onRefresh} refreshing={loading} />
            }

            renderItem={({ item }) => {
                return <TaskItem item={item} load={loadTasks} />
            }} />

    )
}

export default TaskList

const styles = StyleSheet.create({
    tasksContainer: {
        // backgroundColor: 'black',
        // padding: 20,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '100%',
        width: '100%',
        flexDirection: 'column'

    }
}) 