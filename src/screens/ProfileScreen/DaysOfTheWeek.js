import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const DaysOfWeekPicker = ({ onDaysChange }) => {
  const [days, setDays] = useState({
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
  });

  const handleCheck = (day) => {
    const updatedDays = { ...days, [day]: !days[day] };
    setDays(updatedDays);
    onDaysChange(updatedDays);
  };

  return (
    <View>
      <CheckBox
        value={days.sun}
        onValueChange={() => handleCheck('sun')}
        label="Sunday"
      />
      <CheckBox
        value={days.mon}
        onValueChange={() => handleCheck('mon')}
        label="Monday"
      />
      <CheckBox
        value={days.tue}
        onValueChange={() => handleCheck('tue')}
        label="Tuesday"
      />
      <CheckBox
        value={days.wed}
        onValueChange={() => handleCheck('wed')}
        label="Wednesday"
      />
      <CheckBox
        value={days.thu}
        onValueChange={() => handleCheck('thu')}
        label="Thursday"
      />
      <CheckBox
        value={days.fri}
        onValueChange={() => handleCheck('fri')}
        label="Friday"
      />
      <CheckBox
        value={days.sat}
        onValueChange={() => handleCheck('sat')}
        label="Saturday"
      />
    </View>
  );
};

export default DaysOfWeekPicker;
