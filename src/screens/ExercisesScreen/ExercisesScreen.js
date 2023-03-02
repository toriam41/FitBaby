import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const ExercisesScreen = () => {
  return (
    <View style={styles.container}>
      <Text> move to exercise cards screen </Text>
      <Button
        title="View Exercise Cards"
        onPress={alert('exercise cards pressed')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#85998a',
  }
})

export default ExercisesScreen;