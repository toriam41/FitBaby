import React, { View,  useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import FontAwesome from "react-native-vector-icons/FontAwesome";



const Stack = createStackNavigator();

const AuthStack = () => {
    // Implementing user flow
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
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

  return (
      <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ header: () => null }}/>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ header: () => null }}/>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={ ({navigation}) => ({
            title: '',
            
          })

          }
          
      />
      </Stack.Navigator>

  );

  

}

export default AuthStack;
/**
 * options={({navigation}) => ({
            
            header: () => null,
            header: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button 
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Login')}/>
              </View>
            ),
            
        })}
 */