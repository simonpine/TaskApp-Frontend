import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import HomeScreen from './screens/homeScreen';
import TaskFormScreen from './screens/taskFormScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={({navigation}) => ({
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerRight: () => {
            return (
              <TouchableOpacity onPress={()=> navigation.navigate("TaskFormScreen")}>
                <Text style={styles.text}>Create Tasks</Text>
              </TouchableOpacity>
            )
          },
          title: 'Home'
        })} />
        <Stack.Screen name='TaskFormScreen' component={TaskFormScreen} options={({navigation}) => ({
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: 'white',
          },
          title: 'Create New Task',
          headerTintColor: '#fff'
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
      color:'white',
      textAlign: 'center',
      marginRight: 10,
      
  }
}) 