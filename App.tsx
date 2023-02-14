import { SafeAreaView, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import AppNavigator from './AppNavigator'

const App = () => { // App is a function component
  return (
    /*<SafeAreaView style={styles.root}>
      <AppNavigator/>
    </SafeAreaView>*/
    <SafeAreaView style={styles.root}>
      <LoginScreen/>
    </SafeAreaView>

    
  )
}

const styles = StyleSheet.create({ 
  root: {
    flex: 1,
    backgroundColor: '#ffe289',
  }
});

export default App;