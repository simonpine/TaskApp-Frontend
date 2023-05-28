import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='black'></StatusBar>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#161819',
        padding: 20,

        width: '100%',
        alignItems: 'center',
        height: '100%'
    }
}) 

export default Layout