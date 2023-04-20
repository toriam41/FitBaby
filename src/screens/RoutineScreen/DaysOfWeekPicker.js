import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={days.sun}
          onValueChange={() => handleCheck('sun')}
          label="Sunday"
          style={styles.checkbox}
        />
        <Text styles={styles.label}>Sun</Text>
        <CheckBox
          value={days.mon}
          onValueChange={() => handleCheck('mon')}
          label="Monday"
          style={styles.checkbox}
        />
        <Text styles={styles.label}>Mon</Text>
        <CheckBox
          value={days.tue}
          onValueChange={() => handleCheck('tue')}
          label="Tuesday"
          style={styles.checkbox}
        />
        <Text styles={styles.label}>Tue</Text>
        <CheckBox
          value={days.wed}
          onValueChange={() => handleCheck('wed')}
          label="Wednesday"
          style={styles.checkbox}
        />
        <Text styles={styles.label}>Wed</Text>
        <CheckBox
          value={days.thu}
          onValueChange={() => handleCheck('thu')}
          label="Thursday"
          style={styles.checkbox}
        />
        <Text styles={styles.label}>Thu</Text>
        <CheckBox
          value={days.fri}
          onValueChange={() => handleCheck('fri')}
          label="Friday"
          style={styles.checkbox}
        />
        <Text styles={styles.label}>Fri</Text>
        <CheckBox
          value={days.sat}
          onValueChange={() => handleCheck('sat')}
          label="Saturday"
          style={styles.checkbox}
        />

        <Text styles={styles.label}>Sat</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default DaysOfWeekPicker;
