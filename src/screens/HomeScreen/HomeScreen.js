import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => { //navigation is a prop that is passed to the component
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                title = "Routine"
                onPress = {() => navigation.navigate('Routine')}
                color = "#FBEC9D" // change color of button
                />
                <Button
                title = "Fitbaby"
                onPress = {() => navigation.navigate('Fitbaby')}
                />
                <Button
                title = "Exercises"
                onPress = {() => navigation.navigate('Exercises')}
                />
                <Button
                title = "Profile"
                onPress = {() => navigation.navigate('Profile')}
                />
            </View>       
        </View>
    )
}

const styles = StyleSheet.create({ //styling the home screen
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d5cae9',
    },
    title: {
        fontSize: 24,
        marginBottom:20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
})

export default HomeScreen;
