import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import React, {useState} from 'react';
import {handleDeleteExercise} from '../RoutineScreen/RoutineScreen';

const ExercisesScreen = ({navigation}) => {
  //exercise data from API
  const [exerciseData, setExerciseData] = useState([]);

  //exercise type from API
  const [selectedType, setSelectedType] = useState('');

  //exercises added to routine to check for duplicates
  const [routineList, setRoutineList] = useState([]);

  //exercise types matching API types
  const exerciseTypes = [
    'cardio',
    'strength',
    'stretching',
    'olympic_weightlifting',
    'plyometrics',
    'powerlifting',
    'strongman',
  ];

  //fetching exercise data from API
  const fetchExerciseCards = type => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4b348e1878mshc15d211c5f760aap1b7789jsn325a310c1c8c',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com',
      },
    };

    const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=${type}`;

    fetch(url, options)
      .then(response => response.json())
      .then(data => setExerciseData(data))
      .catch(err => console.error(err));
  };

  //rendering exercise data, add to routine button navigates to routine and adds exercise
  //button checks if exercise has been added
  const renderExercises = ({item}) => {
    const isAdded = routineList.includes(item);

    return (
      <View style={styles.exerciseData}>
        <Text>Exercise: {item.name}</Text>
        <Text>Type: {item.type}</Text>
        <Text>Equipment: {item.equipment}</Text>
        <Text>Difficulty: {item.difficulty}</Text>
        <Text>Muscle: {item.muscle}</Text>
        <Button
          title={isAdded ? 'Added to Routine' : 'Add to Routine'}
          onPress={() => {
            if (!isAdded) {
              setRoutineList(routineList => [...routineList, item]);
              navigation.navigate('Routine', {exercise: item});
            } /*else {
              setRoutineList(routineList.filter(exercise => exercise !== item));
              console.log('Exercise already added');
            }*/
          }}
          disabled={isAdded}
        />

        <Text></Text>
      </View>
    );
  };

  //rendering exercise type buttons
  const renderExerciseTypeButton = type => (
    <Button
      title={type}
      onPress={() => {
        setSelectedType(type);
        fetchExerciseCards(type);
      }}
      disabled={selectedType === type}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        {exerciseTypes.map(type => renderExerciseTypeButton(type))}
      </View>
      <FlatList data={exerciseData} renderItem={renderExercises} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#85998a',
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  exerciseData: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default ExercisesScreen;
