import {View, Text, StyleSheet, Pressable, Button, Alert} from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import React from 'react';
import {collection, addDoc, getDocs} from 'firebase/firestore';
import {db, auth} from '../../../firebase-config';
import { useEffect, useState } from 'react';

// PROGRESS TAB

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

  const [earned, setEarned] = useState(0);



  function handleCheckIn() {
    setCheckInCount(checkInCount + 1);
  }

  let currentStreak = 0;
  let longestStreak = 0;

  return (
    <>
      <View style={styles.bkg}>
      <View style={{
        backgroundColor: "white",
          height: "80%", 
          width: "90%",
          borderRadius: 20,
          bottom: 15, 
          alignSelf:"center",
          

      }}>
        <Text style={{color: "black", margin: 20, }}>Progress</Text>

        <View style={{margin: 30, alignSelf: "center", justifyContent:"center", width: "90%", borderColor: MD3Colors.primary60, borderWidth: 1, borderRadius:15, padding: 10, }} >
          <Text style={{color: "black", marginBottom: 20 }}>Achievements</Text>
          <ProgressBar style={{borderRadius: 5}} progress={earned/10} color={MD3Colors.primary60} />
          <Text  style={{color: "grey", marginTop: 7, }}>{earned}/10 completed</Text>
        </View>

        <Text style={{color: "black", marginLeft: 30, marginTop: 20,}}>History</Text>

        <View style={styles.container} >
            <Text style={{color:"#fff", marginLeft: 25, marginTop:10, marginBottom: 10,}}>It's been 0 days since your last workout</Text>
            <Text style={{color:"#fff", marginLeft: 25, marginTop:10, marginBottom: 10,}}>Total Workouts: {'\t \t' + checkInCount}</Text>
            <Text style={{color:"#fff", marginLeft: 25, marginTop:10, marginBottom: 10,}}>Current Streak: {'\t  \t' + currentStreak}</Text>
            <Text style={{color:"#fff", marginLeft: 25, marginTop:10, marginBottom: 10,}}>Longest Streak: {'\t \t' + longestStreak}</Text>
         
        </View>

        
      <Pressable onPress={handleCheckIn} style={{position: "absolute", bottom: 50, alignSelf: "center", justifyContent:"center"}}>
        <View style={[styles.container, styles.item, {backgroundColor: "#A2B36B"}]} >
          <Text style={{textAlign:"center",}}>Log Workout</Text>
        </View>
      </Pressable>

      {/* <Button title="Add Achievements" onPress={handleAddAchievement} />
      {achievements.map(achievement => (
        <View key={achievement.id}>
          <Text>{achievement.name}</Text>
          <Text>{achievement.description}</Text>
          <Text>{achievement.criteria}</Text>
          <Text>Earned: {achievement.earned.toString()}</Text>
        </View>
      ))} */}
      </View>
    </View>

    </>
    
  );
};

const styles = StyleSheet.create({
  bkg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCD5AE',
  },
  container: {
    height: 200,
    width: "90%",
    borderRadius: 15,
    backgroundColor: '#93bbbb',
    alignSelf: "center",
    justifyContent:"center",
    marginTop:20,
    elevation: 5,
    // alignItems: "center"
  },
  item: {
    height: 50,
    width: 200,
    borderRadius: 10,
    margin: 10,
    justifyContent:"center",
    elevation: 5,
    
  }, 
  
});

export default FitBabyScreen;
