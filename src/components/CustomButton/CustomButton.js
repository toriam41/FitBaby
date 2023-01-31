import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} 
    style={[styles.container, 
            styles['container_' + type]]}>
    
      <Text style={[styles.text, styles['text_${type}']]}>{text}</Text>
    
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBEC9D',

        wdith: '100%',

        padding: 15,
        marginVertical: 15,
        marginHorizontal: 30,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#FBEC9D',
    },

    container_TERTIARY: {
        backgroundColor: 'white',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },

    text_TERTIARY: {
        color: 'gray',
    }
});

export default CustomButton;