import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => { // creating a custom input component
    return (
      <View style={styles.container}>
        <TextInput 
        value = {value}
        onChangeText = {setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        />
      </View>
    )
}

const styles = StyleSheet.create({ // styling the input components
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#E5E5E5',
        borderWidth: 1,
        borderRadius: 50,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {},
})

export default CustomInput