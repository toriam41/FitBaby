// packages
import {SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// screens
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';  

// NavBar
import DisplayScreens from './navigation/DisplayScreens';


const App = () => { // App is a function component
  const Stack = createStackNavigator();
  const [isFirstLaunch, setIsFirstLaunch] = useState<Boolean | null>(null);
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

  if (isFirstLaunch === null) { // App hasn't been launched
    return null; // could add a Loader here as a placeholder 
  }
  else if (isFirstLaunch) { // first launch will show onboarding screen
    routeName = "Onboarding";
  }
  else {
   routeName = "DisplayScreens"
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingScreen}
          options={{ header: () => null }} />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ header: ({navigation}) => null }}/>
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen}
          options={{ title: "" }} />
        <Stack.Screen 
          name="Signup"
          component={SignupScreen}
          options={ ({navigation}) => ({header: () => null})}/>
        <Stack.Screen 
            name="DisplayScreens" 
            component={DisplayScreens}
            options={{ header: () => null }} />
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
