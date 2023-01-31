/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { firebase } from '../../firebase/config'
//import auth from '@react-native-firebase/auth';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <LoginScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#d5cae9',
  }
});

export default App;
