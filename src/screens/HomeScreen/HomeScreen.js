import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {auth} from '../../../firebase-config';


const HomeScreen = ({navigation}) => {  //navigation is a prop that is passed to the component
  //signout function
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => console.log(error.message));
    console.log('User signed out!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <View>
        <Button
          title="Logout"
          onPress={() => handleSignOut()}
          position="absolute"
          bottom="0"
          left="0"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //styling the home screen
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
