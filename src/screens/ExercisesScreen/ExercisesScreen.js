import {View, Text, StyleSheet, FlatList, SectionList, Dimensions, Button} from 'react-native';
import React, {useState} from 'react';

import {handleDeleteExercise} from '../RoutineScreen/RoutineScreen';


const ExercisesScreen = ({navigation}) => {
  // exercise type from API
  const [selectedType, setSelectedType] = useState('');

  // exercises added to routine to check for duplicates
  const [routineList, setRoutineList] = useState([]);

  //fetching exercises from specific category data from API
  const fetchExerciseCards = (category) => {
    
    // exercise data from API
    const [exerciseData, setExerciseData] = useState([]);

    // API call needs to handle load time but works
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4b348e1878mshc15d211c5f760aap1b7789jsn325a310c1c8c',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com',
      },
    };
    const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=${category}`;

    fetch(url, options)
      .then(response => response.json())
      .then((data) => setExerciseData(data))
      .catch(err => console.error(err));

    const exercises = exerciseData.sort((a, b) => a.name.localeCompare(b.name));
    return exercises;
  };

  //rendering exercise data, add to routine button navigates to routine and adds exercise
  //button checks if exercise has been added


  // each category listed in its own section
  const sections = [
    {
      title: 'Cardio',
      type: "cardio",
      key: '1',
      theme:  "#FBC688",
      data: fetchExerciseCards("cardio")
    },
    {
      title: 'Strength',
      type: "strength",
      key: '2',
      theme: "#CCD5AE",
      data: fetchExerciseCards("strength")
      
    },
    {
      title: 'Stretching',
      type: 'stretching',
      key: '3',
      theme: "#86BBD8",
      data: fetchExerciseCards('stretching')
    },
    {
      title: "Olympic Weightlifting",
      type: 'olympic_weightlifting',
      key: '4',
      theme: "#F6D36C",
      data: fetchExerciseCards('olympic_weightlifting')
    },
    {
      title: "Plyometrics",
      type: 'plyometrics',
      key: '5',
      theme: "#85998A",
      data: fetchExerciseCards('plyometrics')
    },
    {
      title: 'Powerlifting',
      type: 'powerlifting',
      key: '6',
      theme:  "#D4A373",
      data: fetchExerciseCards('powerlifting')
    },
    {
      title: 'Strongman',
      type: 'strongman',
      key: '7',
      theme:  "#FBC688",
      data: fetchExerciseCards('strongman')
    }
  ]

  // displays each exercise card title
  const ListItem = ({ item, theme }) => {
    return (
      <View style={[styles.item, styles.container, {backgroundColor: theme}]}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
    )
  }
 
  return (
    <>
      <Text>Discover</Text>
      <SectionList
        contentContainerStyle={{ paddingHorizontal: 10 }}
        stickySectionHeadersEnabled={false}
        sections={sections} // should return array of all categories as objects
        renderSectionHeader={({ section }) => {
          return(
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>  
              <FlatList
                data={section.data}
                renderItem={({ item }) => {
                  return (
                    // need touchable opacity to click and display card info
                    <ListItem item={item} theme={section.theme}/>
                  )
                }}
                horizontal={true}
              />
            </>
          )
        }}
        renderItem={({ item }) => {
          return null;
        }}
      />
   </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    marginBottom: 25, 
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 15,
    height: 90,
    width: 250,
    borderRadius: 10,
  },  
  itemText: {
    color: '#fff',
  },
})

export default ExercisesScreen;
