import {View, Text, StyleSheet, FlatList, SectionList, Dimensions, Button, Pressable, Alert, Modal } from 'react-native';
import { ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from 'react'
import {handleDeleteExercise} from '../RoutineScreen/RoutineScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';



const types = [ // all categories
  'cardio',
  'strength',
  'stretching',
  'olympic_weightlifting',
  'plyometrics',
  'powerlifting',
  'strongman',
];

const heading = (name) => {
  if (name === "olympic_weightlifting") {
    name = "Olympic Weightlifting"
  }
  else {
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }

  return name;
}

// component displays each exercise card title
const ListItem = ({ item, theme, routineState, navigation }) => {

    // rendering exercise data, add to routine button navigates to routine and adds exercise
    const [showElement, setShowElement] = useState(false);
    const [routineList, setRoutineList] = routineState;
    const [isAdded, setIsAdded] = useState(routineList.includes(item));

    const handlePress = () => {
        setShowElement(true)
    };
    useEffect(() => {
      // console.log(routineList.includes(item))
      
      // console.log(routineList.includes(item))
      if (routineList.includes(item)) {
        setIsAdded(true) // keeps exercise in list even when deleting on routine page
        console.log(JSON.stringify(routineList))
      }

      // console.log(routineList.includes(item))
    }, [routineList])

    const addExercise = () => {
      if (!routineList.includes(item)) {
        // setRoutineList(routineList => [...routineList, item]);
        setRoutineList(routineList => [...routineList, item]);
        // setIsAdded(true)
        /* setIsAdded(routineList.includes(item))
        console.log(isAdded) */
        navigation.navigate('Routine', {exercise: item});
        setShowElement(false)
         
      }
      
    }

    return (
      <>
        <Pressable style={[styles.item, styles.container, {backgroundColor: theme, elevation: 5,}]}  onPress={handlePress}>
          <View style={{top: 0, left: 0, }}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        </Pressable>

        <Modal transparent={true} visible={showElement}>
          <View style={{backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: "center", }}>
            <View style={{
                margin: 20,
                height: "50%",
                width: "75%",
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 35,
                alignItems: 'center',
            }}>
              <Text style={{color: "#000000",}}>{item.name}</Text>
              <Text style={{color: "#000000",}}>Type: {item.type}</Text>
              <Text style={{color: "#000000",}}>Difficulty: {item.difficulty}</Text>
              <Text style={{color: "#000000",}}>Muscle: {item.muscle}</Text>
              <Button
                    title='close'
                    onPress={() => {setShowElement(false)}}/>
              <Button
                title={isAdded ? 'Added to Routine' : 'Add to Routine'}
                onPress={addExercise}
                disabled={isAdded}
              />
            </View>
          </View>
        </Modal>
      </>
    )
}


const ExercisesScreen = ({navigation}) => { // COMPONENT
  const exercises = Symbol('exercises');
  let i = 1;

  const fetchExerciseCards = (category) => {
    
    // array to store exercise data from API
    const [exerciseData, setExerciseData] = useState([]);

    // controller to limit infinite calls
    const controller = new AbortController();
    const signal = controller.signal
  
    async function fec() {  // API call needs to handle load time but works
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4b348e1878mshc15d211c5f760aap1b7789jsn325a310c1c8c',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com',
        },
        signal: signal,
      };
      const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=${category}`;
      
      if (!signal.aborted) {
        await fetch(url, options)
        .then(response => response.json())
        .then((data) =>{ 
          setExerciseData(data)
          
        })
        .catch((err) => {
            console.error(err)
        })
        controller.abort()
      }
    }
  
    useEffect(() => {
      fec();
      
    }, [exerciseData])
    
    return exerciseData.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  // class to encapsulate all API data returned per category
  class Category {
    constructor(type, key) {
      this.title = heading(type)
      this.key = key
      this[exercises] = fetchExerciseCards(type) 
      this.data = this.getExercises()

      switch (type) {
        case 'cardio': 
          this.theme = "#FBC688";
          break;
        case 'strength':
          this.theme = "#CCD5AE";
          break;
        case 'stretching':
          this.theme = "#86BBD8";
          break;
        case 'olympic_weightlifting':
          this.theme = "#F6D36C";
          break;
        case 'plyometrics':
          this.theme = "#85998A";
          break;
        case 'powerlifting':
          this.theme = "#D4A373";
          break;
        case 'strongman': 
          this.theme = "#FBC688";
          break;
        default : "#000000"
      }
    }
    getExercises() {
      return this[exercises];
    }
  }

  // array of Category objects based on list of categories
  const categories = types.map((type) => {
    const item = new Category(type, i);
    i++;

    return item;
  })

  const [routineList, setRoutineList] = useState([]);
  

  // a function to render the header and list of exercises
   const renderCategoryHeader = ({ section }) => { 
    return (
      <>
        <Text style={{color:"black", marginTop: 10,}}>{section.title}</Text>
        <FlatList // list of exercises under category
        
          data={section.data} // array of exercises in Category[exercises]
          renderItem={({ item }) => { // item = each exercise
            
            return (
              <ListItem item={item} theme={section.theme} routineState={[routineList, setRoutineList]} navigation={navigation}/> 
            )
          }} 
          horizontal={true}
        />
      </>
    )
  }
  

  return (
    <>
      <View style={{
        backgroundColor: "#fefae0",
        height: "100%",
        width: "100%",
        // alignItems: "center",
        justifyContent: "center",
      }}>
        <View style={{
          backgroundColor: "white",
          height: "80%", 
          width: "90%",
          borderRadius: 20,
          bottom: 15, 
          paddingLeft: 20,
          alignSelf:"center",
        }}>
          <Text style={{color: "black", marginTop: 15, marginBottom: 15,}}>Discover</Text> 
          <View>
          </View>
            <SectionList
              stickySectionHeadersEnabled={false}
              sections={categories} 
              renderSectionHeader={renderCategoryHeader}
              renderItem={() =>{return null}}  
            />   
          </View>
      </View>
      
      
      {/* 
     
       
      */}
     
    </>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20, 
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
  exerciseData: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
})

export default ExercisesScreen;
