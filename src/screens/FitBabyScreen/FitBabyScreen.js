import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FitBabyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FitBabyScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9b886f',
  },
});

export default FitBabyScreen;
