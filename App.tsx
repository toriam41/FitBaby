import {SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';

//import AppNavigator from './AppNavigator'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ExercisesScreen from './src/screens/ExercisesScreen';
import FitBabyScreen from './src/screens/FitBabyScreen';
import RoutineScreen from './src/screens/RoutineScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import OnboardingScreen from 'C:/Users/BenjaminNguyen/Fitbaby/screens/OnboardingScreen.js';
import LoginScreen2 from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

const App = () => {
  // App is a function component
  //{initialRouteName: 'Onboarding'}
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen2} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="FitBaby" component={FitBabyScreen} />
        <Stack.Screen name="Exercises" component={ExercisesScreen} />
        <Stack.Screen name="Routine" component={RoutineScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffe289',
  },
});

export default App;
