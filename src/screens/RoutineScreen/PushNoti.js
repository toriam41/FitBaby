import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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

  return (
    <View>
      <TouchableOpacity onPress={() => setShowTimePicker(true)}>
        <Text>{time || 'Select Time'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowDaysPicker(true)}>
        <Text>{days ? 'Days Selected' : 'Select Days'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSave}>
        <Text>Save</Text>
      </TouchableOpacity>
      <DateTimePicker
        visible={showTimePicker}
        onClose={() => setShowTimePicker(false)}
        onDateChange={handleTimeChange}
      />
      <DaysOfWeekPicker
        onDaysChange={handleDaysChange}
        visible={showDaysPicker}
        onClose={() => setShowDaysPicker(false)}
      />
    </View>
  );
};

export default PushNoti;
