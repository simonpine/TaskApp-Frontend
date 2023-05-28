import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { saveTask, getTask, edit } from '../api'

const TaskFormScreen = ({ navigation, route }) => {
  const condi = route.params && route.params.id
  const [titleRef, setTitle] = useState('')
  const [descriptionRef, setDescriptionRef] = useState('')

  const save = async(evt) => {
    if (condi){
      await edit(route.params.id, titleRef, descriptionRef)
    }
    else{
      await saveTask(titleRef, descriptionRef);
    }
    navigation.navigate("Home")
  }

  useEffect(() => {
    if (condi) {
      navigation.setOptions({ headerTitle: 'Updating the task #' + route.params.id })
        getTask(route.params.id).then((res) => {
          setTitle(res.title)
          setDescriptionRef(res.description)
        })
    }
  }, [])
  return (
    <Layout>
      <TextInput value={titleRef} onChangeText={(e) => setTitle(e)} style={styles.inputs} placeholderTextColor='grey' placeholder='Title' />
      <TextInput value={descriptionRef} onChangeText={(e) => setDescriptionRef(e)} style={styles.inputs} placeholderTextColor='grey' placeholder='Description' />
      <TouchableOpacity onPress={save} activeOpacity={0.37} style={{ backgroundColor: 'black', alignSelf: 'flex-start', borderRadius: 10 }} disabled={descriptionRef === '' || titleRef === ''}>
        {condi? 
        <Text style={styles.button}>Update Task</Text> 
        :
        <Text style={styles.button}>Create Task</Text> 
        }
      </TouchableOpacity>
    </Layout>
  )
}

export default TaskFormScreen

const styles = StyleSheet.create({
  inputs: {
    borderColor: 'black',
    borderWidth: 4,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    height: 'auto',
    color: '#fff',
    borderRadius: 10
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: '#fff',
    // width: 60,
  }
}) 