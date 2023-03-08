import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const RoutineScreen = () => {
  return (
    <View style={styles.container}>
      <Text>RoutineScreen</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#86BBD8',
  }
})

export default RoutineScreen;
