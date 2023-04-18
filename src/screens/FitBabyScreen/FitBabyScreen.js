import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';

const FitBabyScreen = () => {
  const [checkInCount, setCheckInCount] = useState(0);
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      name: 'First Steps!',
      description: 'Your baby took their first steps to the gym!',
      criteria: "Log your baby's first workout in the app's activity tracker.",
      earned: false,
    },
    {
      id: 2,
      name: "Baby's Growing Up!",
      description: 'Your baby spent 30 minutes on their tummy!',
      criteria: "Log your baby's workouts in the app at least 10 times",
      earned: false,
    },
    // add more achievements here
  ]);

  function checkAchievements() {
    // Loop through each achievement
    for (let i = 0; i < achievements.length; i++) {
      const achievement = achievements[i];

      // Check if the user has already earned this achievement
      if (achievement.earned) {
        continue;
      }

      // Check if the user has met the criteria for this achievement
      if (achievement.name === 'First Steps!' && checkInCount == 1) {
        achievement.earned = true;
        // Display a message or notification to let the user know they earned the achievement
        Alert.alert(
          "Congratulations, you earned the 'First Steps!' achievement!",
        );
      }
      if (achievement.name === "Baby's Growing Up!" && checkInCount >= 10) {
        achievement.earned = true;
        // Display a message or notification to let the user know they earned the achievement
        Alert.alert(
          "Congratulations, you earned the 'Baby's Growing Up!' achievement!",
        );
      }
    }
    setAchievements(achievements);
  }

  useEffect(() => {
    checkAchievements();
  }, [checkInCount]);

  function handleCheckIn() {
    setCheckInCount(checkInCount + 1);
  }

  function resetCheckIn() {
    setCheckInCount(0);
  }

  return (
    <View style={styles.container}>
      <Text>FitBabyScreen</Text>
      <Text>Check-ins: {checkInCount}</Text>
      <Button title="Log Workout" onPress={handleCheckIn} />
      <Button title="Reset" onPress={resetCheckIn} />
      {achievements.map(achievement => (
        <View key={achievement.id}>
          <Text>{achievement.name}</Text>
          <Text>{achievement.description}</Text>
          <Text>{achievement.criteria}</Text>
          <Text>Earned: {achievement.earned.toString()}</Text>
        </View>
      ))}
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
