import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

/*const ExercisesScreen = () => {
  return (
    <View>
      <Text>ExercisesScreen</Text>
    </View>
  )
}*/

export default function ExercisesScreen(){ //need to add navigation to exercise cards on <Button line 17;
  return(
    <View> 
      <Text> move to exercise cards screen </Text>
      <Button title='View Exercise Cards' onPress={console.warn('exercise cards pressed')}/> 
    </View>
  )
}