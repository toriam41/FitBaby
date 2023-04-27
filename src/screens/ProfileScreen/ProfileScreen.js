import React, {useState} from 'react';
import {ScrollView, Text, Button, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';

const ProfileScreen = () => {
  //to show or hide time picker
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  //time chosen by user
  const [selectedTime, setSelectedTime] = useState(new Date());
  //days selected by user
  const [selectedDays, setSelectedDays] = useState([
    {name: 'Monday', checked: false},
    {name: 'Tuesday', checked: false},
    {name: 'Wednesday', checked: false},
    {name: 'Thursday', checked: false},
    {name: 'Friday', checked: false},
    {name: 'Saturday', checked: false},
    {name: 'Sunday', checked: false},
  ]);

  //to show or hide time picker
  const handleTimeConfirm = time => {
    setIsTimePickerVisible(false);
    setSelectedTime(time);
  };

  const handleDaySelect = dayName => {
    const updatedDays = selectedDays.map(day => {
      if (day.name === dayName) {
        return {...day, checked: !day.checked};
      }
      return day;
    });
    setSelectedDays(updatedDays);
  };
  //save notification time and days to async storage
  const handleSave = async () => {
    try {
      await AsyncStorage.setItem('notificationTime', selectedTime.toString());
      const selectedDaysIds = selectedDays
        .filter(day => day.checked)
        .map(day => day.name);
      await AsyncStorage.setItem(
        'notificationDays',
        JSON.stringify(selectedDaysIds),
      );
      scheduleWeeklyNotifications(selectedTime, selectedDaysIds);
    } catch (e) {
      console.error(e);
    }
  };
  //schedule notifications
  const scheduleWeeklyNotifications = (time, days) => {
    days.forEach(day => {
      const notificationDate = getNextDayOfWeek(day, time);
      PushNotification.localNotificationSchedule({
        message: 'Your weekly report is ready!',
        date: notificationDate,
        repeatType: 'week',
        weekday: day,
      });
    });
  };

  const getNextDayOfWeek = (dayOfWeek, time) => {
    const now = new Date();
    const offset = dayOfWeek - now.getDay();
    let notificationDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + offset,
    );
    notificationDate.setHours(time.getHours(), time.getMinutes(), 0, 0);
    if (now.getTime() > notificationDate.getTime()) {
      notificationDate = new Date(
        notificationDate.getFullYear(),
        notificationDate.getMonth(),
        notificationDate.getDate() + 7,
      );
    }
    return notificationDate;
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Select Notification Time:</Text>
      <Button
        title="Select Time"
        onPress={() => setIsTimePickerVisible(true)}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={() => setIsTimePickerVisible(false)}
      />
      <Text>Select Notification Days:</Text>
      {selectedDays.map(day => (
        <CheckBox
          key={day.name}
          style={styles.checkbox}
          isChecked={day.checked}
          onClick={() => handleDaySelect(day.name)}
          leftText={day.name}
        />
      ))}
      <Button title="Save" onPress={handleSave} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  checkbox: {
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});

export default ProfileScreen;
