// packages
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// screens
import HomeScreen from '../src/screens/HomeScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import FitBabyScreen from '../src/screens/FitBabyScreen';
import ExercisesScreen from '../src/screens/ExercisesScreen';
import RoutineScreen from '../src/screens/RoutineScreen';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <>
      <Tab.Navigator 
        initialRouteName={"Home"}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            backgroundColor: "#ffffff",
            borderRadius: 15,
            height: 65,
            ...styles.shadow,
          }
        }}>
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{ 
              header: () => null,
              tabBarIcon: ({ focused }) => (
                <View 
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 2,
                }}>
                  <Image
                    source={
                      focused ? require("../assets/icons/pacifier-bold.png") : require("../assets/icons/pacifier.png")
                    }
                    resizeMode="contain"
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: focused ? "#ffe289" : "#748c94"
                    }} />
                  <Text
                    style={{
                      color: focused ? "#ffe289" : "#748c94",
                      fontSize: 12,
                    }}>myBABY</Text>                
                </View>
              )
            }} />
          <Tab.Screen 
            name="Exercises" 
            component={ExercisesScreen}
            options={{ 
              header: () => null,
              tabBarIcon: ({ focused }) => (
                <View 
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 2,
                }}>
                  <Image
                    source={
                      focused ? require("../assets/icons/home-bold.png") : require("../assets/icons/home.png")
                    }
                    resizeMode="contain"
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: focused ? "#85998a" : "#748c94"
                    }} />
                  <Text
                    style={{
                      color: focused ? "#85998a" : "#748c94",
                      fontSize: 12,
                    }}>DISCOVER</Text>                
                </View>
              )
            }} />
          <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ 
            header: () => null,
            tabBarIcon: ({ focused }) => (
              <View 
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 2,
              }}>
                <Image
                  source={
                    focused ? require("../assets/icons/home-bold.png") : require("../assets/icons/home.png")
                  }
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? "#ffcd89" : "#748c94"
                  }} />
                <Text
                  style={{
                    color: focused ? "#ffcd89" : "#748c94",
                    fontSize: 12,
                  }}>HOME</Text>                
              </View>
            )
          }} />
          <Tab.Screen 
            name="FitBaby" 
            component={FitBabyScreen}
            options={{ 
              header: () => null,
              tabBarIcon: ({ focused }) => (
                <View 
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 2,
                }}>
                  <Image
                    source={
                      focused ? require("../assets/icons/home-bold.png") : require("../assets/icons/home.png")
                    }
                    resizeMode="contain"
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: focused ? "#9b886f" : "#748c94"
                    }} />
                  <Text
                    style={{
                      color: focused ? "#9b886f" : "#748c94",
                      fontSize: 12,
                    }}>PROGRESS</Text>                
                </View>
              )
            }} />
          <Tab.Screen 
            name="Routine" 
            component={RoutineScreen}
            options={{ 
              header: () => null,
              tabBarIcon: ({ focused }) => (
                <View 
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 2,
                }}>
                  <Image
                    source={
                      focused ? require("../assets/icons/home-bold.png") : require("../assets/icons/home.png")
                    }
                    resizeMode="contain"
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: focused ? "#86BBD8" : "#748c94"
                    }} />
                  <Text
                    style={{
                      color: focused ? "#86BBD8" : "#748c94",
                      fontSize: 12,
                    }}>ROUTINE</Text>                
                </View>
              )
            }} />
      </Tab.Navigator>
    </>
  )
  
}

const styles = StyleSheet.create({
   shadow: {
    shadowColor: "#171717",
   },
})
export default NavBar;
