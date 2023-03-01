import {SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
//import AppNavigator from './AppNavigator'
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import ExercisesScreen from './src/screens/ExercisesScreen';
import FitBabyScreen from './src/screens/FitBabyScreen';
import RoutineScreen from './src/screens/RoutineScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import OnboardingScreen from './screens/OnboardingScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';


const Stack = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then(value => {
      if (value === null) { // if no value then app hasn't been launched so update state to launched = true
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      }
      else {
        setIsFirstLaunch(false);
      }
    }); // add error handling
  }, []);

  if (isFirstLaunch === null) { // hasn't been launched
    return null; // could add a Loader here as a placeholder 
  }
  else if (isFirstLaunch) { // first launch will show onboarding screen
    routeName = "Onboarding";
  }
  else {
   routeName = "Login"
  }
  // App is a function component
  //{initialRouteName: 'Onboarding'}
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingScreen}
          options={{ header: () => null }} />
        <Stack.Screen 
          name="Signup"
          component={SignupScreen}
          options={ ({navigation}) => ({
            title: '',
            header: () => null, 
            })
          }/>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ header: () => null }}/>
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
