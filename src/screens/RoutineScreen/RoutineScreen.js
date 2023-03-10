import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  View,
  Button,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const RoutineScreen = ({navigation}) => {
  //List of exercises (change to be pulled from database)
  const [routineList, setRoutineList] = useState([
    {
      id: 1,
      name: 'Incline Hammer Curls',
      type: 'strength',
      muscle: 'biceps',
      equipment: 'dumbbells',
      difficulty: 'beginner',
      instructions:
        'Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.',
    },
    {
      id: 2,
      name: 'Hammer Curls',
      type: 'strength',
      muscle: 'legs',
      equipment: 'dumbbells',
      difficulty: 'easy',
      instructions:
        'Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. This will be your starting position. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm. After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position. Repeat for the recommended amount of repetitions.  Variations: There are many possible variations for this movement. For instance, you can perform the exercise sitting down on a bench with or without back support and you can also perform it by alternating arms; first lift the right arm for one repetition, then the left, then the right, etc.',
    },
    {
      id: 3,
      name: 'Barbell Hip Thrust',
      type: 'powerlifting',
      muscle: 'glutes',
      equipment: 'barbell',
      difficulty: 'intermediate',
      instructions:
        'Begin seated on the ground with a bench directly behind you. Have a loaded barbell over your legs. Using a fat bar or having a pad on the bar can greatly reduce the discomfort caused by this exercise. Roll the bar so that it is directly above your hips, and lean back against the bench so that your shoulder blades are near the top of it. Begin the movement by driving through your feet, extending your hips vertically through the bar. Your weight should be supported by your shoulder blades and your feet. Extend as far as possible, then reverse the motion to return to the starting position.',
    },
    {
      id: 4,
      name: 'Jumping Jacks',
      type: 'cardio',
      muscle: 'legs',
      equipment: 'none',
      difficulty: 'beginner',
      instructions:
        'Stand with your feet together and your arms at your sides. Jump into the air with your legs spread wide apart and your arms overhead. Land with your feet together and your arms at your sides. Repeat.',
    },
    {
      id: 5,
      name: 'test',
    },
    {
      id: 6,
    },
  ]);

  //Variables for checkboxes
  const handleCheckboxChange = exerciseId => {
    setIsSelected({...isSelected, [exerciseId]: !isSelected[exerciseId]});
  };

  //sets inital state of checkbox according to id
  const [isSelected, setIsSelected] = useState({
    [routineList[0].id]: false,
    [routineList[1].id]: false,
    [routineList[2].id]: false,
  });

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() =>
        Alert.alert(
          item.name,
          `Type: ${item.type}\nMuscle: ${item.muscle}\nDifficulty: ${item.difficulty}\n\nHow to: ${item.instructions}`,
        )
      }>
      <View style={styles.listItemLeft}>
        <Text style={styles.listItemTitle}>{item.name}</Text>
      </View>
      <TouchableOpacity style={styles.listItemButton}>
        <Text style={styles.listItemButtonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.listItemButton}>
        <Text style={styles.listItemButtonText}>Delete</Text>
      </TouchableOpacity>
      <CheckBox
        value={isSelected[item.id]}
        onValueChange={() => handleCheckboxChange(item.id)}
        style={{height: 20, width: 20}}
        id={'checkbox_${item.id}'}
      />
    </TouchableOpacity>
  );
  //add exercise button shall navigate to exercises screen
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Routine</Text>
        <Button
          title="Add Exercise"
          onPress={() => navigation.navigate('Exercises')}
          color="#648daf"
          paddingHorizontal={5}
          paddingVertical={5}
          style={styles.addExerciseButton}
        />
      </View>
      <FlatList
        data={routineList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  listItemLeft: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  listItemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  listItemButton: {
    backgroundColor: '#e6e6e6',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  listItemButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  addExerciseButton: {
    color: '#85998a',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default RoutineScreen;
