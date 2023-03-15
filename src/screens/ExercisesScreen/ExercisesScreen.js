import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import React, {useState} from 'react';

const ExercisesScreen = () => {
  const [exerciseData, setExerciseData] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  const exerciseTypes = [
    'cardio',
    'strength',
    'stretching',
    'olympic_weightlifting',
    'plyometrics',
    'powerlifting',
    'strongman',
  ]; // Add other exercise types as needed

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

  const renderExercises = ({item}) => (
    <View key={item.id} style={styles.exerciseData}>
      <Text>Exercise: {item.name}</Text>
      <Text>Type: {item.type}</Text>
      <Text>Equipment: {item.equipment}</Text>
      <Text>Difficulty: {item.difficulty}</Text>
      <Text>Muscle: {item.muscle}</Text>
      <Text></Text>
    </View>
  );

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
