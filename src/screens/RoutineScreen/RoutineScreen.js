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
import DraggableFlatList from 'react-native-draggable-flatlist';

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
      instructions: '',
    },
    {
      id: 2,
      name: 'Hammer Curls',
      type: 'strength',
      muscle: 'legs',
      equipment: 'dumbbells',
      difficulty: 'easy',
      instructions: '',
    },
    {
      id: 3,
      name: 'Barbell Hip Thrust',
      type: 'powerlifting',
      muscle: 'glutes',
      equipment: 'barbell',
      difficulty: 'intermediate',
      instructions: '',
    },
    {
      id: 4,
      name: 'Jumping Jacks',
      type: 'cardio',
      muscle: 'legs',
      equipment: 'none',
      difficulty: 'beginner',
      instructions: '',
    },
    {
      id: 5,
      name: 'test',
      type: 'cardio',
      muscle: 'legs',
      equipment: 'none',
      difficulty: 'beginner',
      instructions: '',
    },
    {
      id: 6,
      name: 'test2',
      type: 'cardio',
      muscle: 'legs',
      equipment: 'none',
      difficulty: 'beginner',
      instructions: '',
    },
  ]);

  //Variables for checkboxes
  const handleCheckboxChange = exerciseId => {
    setIsSelected({...isSelected, [exerciseId]: !isSelected[exerciseId]});
  };

  //sets inital state of checkbox according to id
  const isSelectedInitialState = routineList.reduce(
    (obj, item) => ({...obj, [item.id]: false}),
    {},
  );

  const [isSelected, setIsSelected] = useState(isSelectedInitialState);

  const handleDeleteExercise = id => {
    setRoutineList(prevList => prevList.filter(item => item.id !== id));
  };

  const renderItem = ({item, drag, isActive}) => (
    <TouchableOpacity
      style={[styles.listItem, isActive ? styles.listItemActive : null]}
      onPress={() =>
        Alert.alert(
          item.name,
          `Type: ${item.type}\nMuscle: ${item.muscle}\nDifficulty: ${item.difficulty}\n\nHow to: ${item.instructions}`,
        )
      }
      onLongPress={drag}>
      <View style={styles.listItemLeft}>
        <Text style={styles.listItemTitle}>{item.name}</Text>
      </View>
      <TouchableOpacity style={styles.listItemButton}>
        <Text style={styles.listItemButtonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.listItemButton}
        onPress={() => handleDeleteExercise(item.id)}>
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
      <DraggableFlatList
        data={routineList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onDragEnd={({data}) => setRoutineList(data)}
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
