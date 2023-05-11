import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {auth, db} from '../../../firebase-config';
import {collection, getDocs} from 'firebase/firestore';

// suppose to host baby avatar
const FitBabyScreen = () => {
  const [userEmail, setUserEmail] = useState(''); //email

  // counting how many times the user checks in on the app
  const [checkInCount, setCheckInCount] = useState(0);

  // list of achievements that are available to the user to earn
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail('');
      }
    });
    return unsubscribe;
  }, []);

  // function to fetch achievements from the database
  async function fetchAchievements() {
    try {
      // Get a list of all achievements
      const achievementsRef = collection(db, 'achievements');
      const querySnapshot = await getDocs(achievementsRef);
      // Map the list of achievements to an array "achievementsList"
      const achievementsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        earned: false,
        description: doc.data().description,
        criteria: doc.data().criteria,
      }));
      // Set the achievements state to achievementsList
      setAchievements(achievementsList);
      setLoading(false);
    } catch (error) {
      console.log('Error getting achievements:', error);
      setLoading(false);
    }
  }

  // Fetch achievements when the component mounts only once
  useEffect(() => {
    fetchAchievements();
  }, []);

  // function to check if the user has earned any achievements
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
    // Update the achievements state (earned)
    setAchievements(achievements);
  }

  //every time the checkInCount state changes, check if the user has earned any achievements
  useEffect(() => {
    checkAchievements();
  }, [checkInCount]);

  function handleCheckIn() {
    setCheckInCount(checkInCount + 1);
  }

  return (
    <View style={styles.container}>
      <Text>FitBabyScreen</Text>
      <Text>Check-ins: {checkInCount}</Text>
      <Button title="Log Workout" onPress={handleCheckIn} />
      {/* {achievements.map(achievement => (
        <View key={achievement.id}>
          <Text>{achievement.name}</Text>
          <Text>{achievement.description}</Text>
          <Text>{achievement.criteria}</Text>
          <Text>Earned: {achievement.earned.toString()}</Text>
        </View>
      ))} */}
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
