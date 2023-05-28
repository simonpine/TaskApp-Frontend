import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { del } from '../api'
const TaskItem = ({ item, load }) => {

    const navigation = useNavigation()
    const dalete = async(evt) => {

        await del(item.id);
        await load()
    
      }
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('TaskFormScreen', item)
            }}>
                <Text style={styles.texts}>{item.title}</Text>
                <Text style={styles.texts}>{item.description}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={dalete}>
                <Image style={styles.image} source={require('../assets/delete.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default TaskItem
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#0F0F0F',
        padding: 10,
        width: '100%',
        marginTop: 10,
        borderRadius: 10,
        height: 'auto',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    texts: {
        color: '#ffffff',
    },
    image:{
        width: 25,
        height: 25,
    }
})