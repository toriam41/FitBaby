import { SafeAreaView, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import AppNavigator from './AppNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const App = () => { // App is a function component
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>

    /*<SafeAreaView style={styles.root}>
      <AppNavigator/>
    </SafeAreaView>*/
  )
}

const styles = StyleSheet.create({ 
  root: {
    flex: 1,
    backgroundColor: '#ffe289',
  }
});

export default App;