import { SafeAreaView, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from 'C:/Users/BenjaminNguyen/Fitbaby/src/screens/RegisterScreen';
import AppNavigator from './AppNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const App = () => { // App is a function component
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({ 
  root: {
    flex: 1,
    backgroundColor: '#ffe289',
  }
});

export default App;