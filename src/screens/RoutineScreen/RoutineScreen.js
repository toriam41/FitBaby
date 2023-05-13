import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {BarChart} from 'react-native-chart-kit';
import Pie from 'react-native-pie';
import {auth} from '../../../firebase-config';

const RoutineScreen = ({navigation, route}) => {
  const [routineList, setRoutineList] = useState([]);
  const [exerciseTypeData, setExerciseTypeData] = useState([]);

  // Receive exercise from params and add it to the routineList
  useEffect(() => {
    if (route.params && route.params.exercise) {
      setRoutineList(routineList => [...routineList, route.params.exercise]);
    }
  }, [route.params]);

  // Get the exercise types from the routineList and create a breakdown
  useEffect(() => {
    const exerciseTypes = {};
    routineList.forEach(exercise => {
      if (exercise.type in exerciseTypes) {
        exerciseTypes[exercise.type].count += 1;
      } else {
        exerciseTypes[exercise.type] = {
          count: 1,
          category: exercise.category, // add category to exerciseTypes object
        };
      }
    });
    const data = [];
    let totalCount = 0;
    for (const [type, {count, category}] of Object.entries(exerciseTypes)) {
      data.push({name: type, count, category});
      totalCount += count;
    }
    for (const item of data) {
      item.percentage = (item.count / totalCount) * 100;
      item.color = '#' + Math.floor(Math.random() * 16777215).toString(16); // generate random color
    }
    console.log(data);
    setExerciseTypeData(data);
  }, [routineList]);

  //Variables for checkboxes
  const handleCheckboxChange = exerciseName => {
    setIsSelected({...isSelected, [exerciseName]: !isSelected[exerciseName]});
  };

  //sets inital state of checkbox according to id
  const isSelectedInitialState = routineList.reduce(
    (obj, item) => ({...obj, [item.id]: false}),
    {},
  );

  const [isSelected, setIsSelected] = useState(isSelectedInitialState);

  const deleteExerciseFromFirestore = exercise => {
    const {setIsAdded} = route.params ?? {};
    // Get a reference to the Firestore database

    console.log('Deleting exercise with ID: ', exercise);
    // Delete the exercise document from Firestore
    firestore()
      .collection('users')
      .doc(auth.currentUser)
      .collection('routines')
      .doc('routine')
      .collection('exercises')
      .doc(exercise)
      .delete()
      .then(() => {
        setIsAdded(false);
        console.log('Exercise deleted successfully!');
      })
      .catch(error => {
        console.error('Error deleting exercise:', error);
      });
  };

  //deleting exercise from routine through name
  const handleDeleteExercise = name => {
    setRoutineList(prevList => prevList.filter(item => item.name !== name));
    //setRoutineList(routineList.filter(exercise => exercise !== item));
  };

  //drag and drop and showing exercise details
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
        onPress={() => handleDeleteExercise(item.name)}>
        <Text style={styles.listItemButtonText}>Delete</Text>
      </TouchableOpacity>
      <CheckBox
        value={isSelected[item.name]}
        onValueChange={() => handleCheckboxChange(item.name)}
        style={{height: 20, width: 20}}
        id={`checkbox_${item.id}`}
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
        keyExtractor={item => item.name}
        onDragEnd={({data}) => setRoutineList(data)}
      />
      {exerciseTypeData.length > 0 && (
        <View style={{marginTop: 20}}>
          <Pie
            radius={100}
            sections={exerciseTypeData.map(data => ({
              percentage: data.percentage,
              color: data.color,
              title: data.category,
            }))}
            strokeCap={'butt'}
          />
        </View>
      )}
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
