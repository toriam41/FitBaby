import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DateTimePicker = ({ visible, onClose, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    onDateChange(date);
    onClose();
  };

  const handleDateCancel = () => {
    onClose();
  };

  return (
    <DateTimePickerModal
      isVisible={visible}
      mode="time"
      onConfirm={handleDateConfirm}
      onCancel={handleDateCancel}
    />
  );
};

export default DateTimePicker;
