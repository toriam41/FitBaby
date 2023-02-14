import { createStackNavigator } from '@react-navigation/stack';
//import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import RoutineScreen from './src/screens/RoutineScreen';
import FitBabyScreen from './src/screens/FitBabyScreen';
import ExercisesScreen from './src/screens/ExercisesScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator(); //create stack navigator to move between screens

function AppNavigator({}) {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen"> 
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Routine"
        component={RoutineScreen}
        options={{ title: 'Routine' }}
      />
      <Stack.Screen
        name="Fitbaby"
        component={FitBabyScreen}
        options={{ title: 'FitBaby' }}
      />
      <Stack.Screen
        name="Exercises"
        component={ExercisesScreen}
        options={{ title: 'Exercises' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
    </NavigationContainer>      
  );
}

export default AppNavigator;
