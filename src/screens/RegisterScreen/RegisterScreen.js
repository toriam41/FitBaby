import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  useWindowDimensions,
} from 'react-native';
import Logo from '../../../src/FitBaby_Logo.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import {app, db, auth} from '../../../firebase-config';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();

  //height used for logo size
  const {height} = useWindowDimensions();

  //database variables into collection
  const [email, setEmail] = useState(''); //email
  const [password, setPassword] = useState(''); //password

  //Create an account using Auth.js
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Created user with email', user.email, user.password);
      })
      .catch(error => console.log(error.message));
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const onLoginPressed = () => {
    handleLogin();
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password Pressed');
  };

  const onCreateAccountPressed = () => {
    handleSignUp();
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image //logo
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="center"
          source={Logo}
        />

        <Text style={[styles.bold, styles.underline]}>Register</Text>

        <CustomInput //input field for email
          placeholder="New Email"
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />

        <CustomInput //input field for password
          placeholder="New Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Create Account" onPress={onCreateAccountPressed} />
        <CustomButton
          text="Already Have an Account? Login Here!"
          onPress={onLoginPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  //styling for login screen
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    height: 400,
    maxWidth: 500,
  },
  bold: {fontWeight: 'bold'},
  underline: {textDecorationLine: 'underline'},
});

export default RegisterScreen;
