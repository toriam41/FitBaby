import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProfileScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button 
          title = "Cardio"
          onPress = {() => navigation.navigate('Cardio')} 
          color='#85998A'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffe289',
  }
})

export default ProfileScreen;
