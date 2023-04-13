import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import DateTimePicker from './DateTimePicker';
import DaysOfWeekPicker from './DaysOfTheWeek';

const scheduledNoti = {
    time: NOT_INITIALIZED_ERROR, 
    date: NOT_INITIALIZED_ERROR
}

const PushNoti = () => {
return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
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

export default PushNoti;