import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import DateTimePicker from './DateTimePicker';
import DaysOfWeekPicker from './DaysOfWeekPicker';
import moment from 'moment';

const PushNoti = ({navigation}) => {
  const [time, setTime] = useState(null);
  const [days, setDays] = useState(null);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDaysPicker, setShowDaysPicker] = useState(false);

  const handleTimeChange = (date) => {
    setTime(moment(date).format('HH:mm'));
  };

  const handleDaysChange = (updatedDays) => {
    setDays(updatedDays);
  };

  const handleSave = () => {
    // Save the selected time and days here
    console.log('Selected Time:', time);
    console.log('Selected Days:', days);
  };

  const showMode = (currentMode) => {
    setShowTimePicker(true);
    setMode(currentMode);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setShowTimePicker(true)}>
        <Text style={styles.labels}>{time || 'Select Time'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowDaysPicker(true)}>
        <Text style={styles.labels}>{days ? 'Days Selected' : 'Select Days'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSave}>
        <Text style={styles.labels}>Save</Text>
      </TouchableOpacity>
      <DateTimePicker
        visible={showTimePicker}
        onClose={() => setShowTimePicker(false)}
        onDateChange={handleTimeChange}
      />
      <Button title='Time Picker' onPress={() => showMode('time')}/>
      <DaysOfWeekPicker
        onDaysChange={handleDaysChange}
        visible={showDaysPicker}
        onClose={() => setShowDaysPicker(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  labels: {
    fontSize: 20,
    marginLeft: 40,
  },
});

export default PushNoti;
