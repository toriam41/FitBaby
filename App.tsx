import { SafeAreaView, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from 'C:/Users/BenjaminNguyen/Fitbaby/src/screens/RegisterScreen';
import HomeScreen from 'C:/Users/BenjaminNguyen/Fitbaby/src/screens/HomeScreen';

//import AppNavigator from './AppNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ExercisesScreen from './src/screens/ExercisesScreen';
import FitBabyScreen from './src/screens/FitBabyScreen';
import RoutineScreen from './src/screens/RoutineScreen';
import ProfileScreen from 'C:/Users/BenjaminNguyen/Fitbaby/src/screens/ProfileScreen';

const Stack = createStackNavigator();

const App = () => { // App is a function component
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="FitBaby" component={FitBabyScreen} />
        <Stack.Screen name="Exercises" component={ExercisesScreen} />
        <Stack.Screen name="Routine" component={RoutineScreen} />
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