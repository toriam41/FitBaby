// THIS IS THE DISCOVER TAB

import {View, Text, StyleSheet, FlatList, SectionList, Dimensions, Button} from 'react-native';
import React from 'react';

// array holding all categories and their exercise cards
const sections = [
  {
    title: 'Cardio',
    theme: "#FBC688", 
    data: [   // exercise cards
    {
      key: '1',
      text: 'exercise 1',
    },
    {
      key: '2',
      text: 'exercise 2',
    },
    {
      key: '3',
      text: 'exercise 3',
    }]
  }, 
  { 
    title: 'Strength Training',
    theme: "#CCD5AE", 
    data: [
    {
      key: '1',
      text: 'exercise 1',
    },
    {
      key: '2',
      text: 'exercise 2',
    },
    {
      key: '3',
      text: 'exercise 3',
    }]
  }, 
  {
    title: 'Flexibility',
    theme: "#86BBD8",
    data: [
    {
      key: '1',
      text: 'exercise 1',
    },
    {
      key: '2',
      text: 'exercise 2',
    },
    {
      key: '3',
      text: 'exercise 3',
    }]
  }, 
  {
    title: 'Aerobics',
    theme: "#D4A373", 
    data: [
    {
      key: '1',
      text: 'exercise 1',
    },
    {
      key: '2',
      text: 'exercise 2',
    },
    {
      key: '3',
      text: 'exercise 3',
    }]
  },
  {
    title: 'Endurance',
    theme: "#85998A", 
    data: [
    {
      key: '1',
      text: 'exercise 1',
    },
    {
      key: '2',
      text: 'exercise 2',
    },
    {
      key: '3',
      text: 'exercise 3',
    }]
  },
  {
    title: 'Balance',
    theme: "#D4A373", 
    data: [
    {
      key: '1',
      text: 'exercise 1',
    },
    {
      key: '2',
      text: 'exercise 2',
    },
    {
      key: '3',
      text: 'exercise 3',
    }]
  },
];

const ListItem = ({ item, theme }) => {
  return (
    <View style={[styles.item, {backgroundColor: theme}]}>  
      <Text style={styles.itemText}> {item.text} </Text>
    </View>
  );
};

const ExercisesScreen = () => {
  return(
    <>
    <Text>Discover</Text>
    <SectionList
        contentContainerStyle={{ paddingHorizontal: 10 }}
        stickySectionHeadersEnabled={false}
        sections={sections}
        renderSectionHeader={({ section }) => (
          <>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            <FlatList
              data={section.data}
              style={styles.container}
              renderItem={({ item }) => {
                return <ListItem item={item} theme={section.theme} />
              }}
              
            />
          </> 
        )}
        renderItem={({ item, section }) => {
          return null;
          // return <ListItem item={item} />;
        }}
    />
    </>
  );
    
}

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
    // marginLeft: 15,
    marginRight: 15,
    height: 90,
    width: 250,
    borderRadius: 10,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
})

export default ExercisesScreen;
