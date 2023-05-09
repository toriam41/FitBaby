import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {auth} from '../firebase-config';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {ScrollView} from 'react-native';

// sets user login info
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLoginPressed = () => {
    handleLogin();
  };
  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password Pressed');
  };
  const onCreateAccountPressed = () => {
    handleSignUp();
  };

  // checks user's login info
  const handleLogin = () => {
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with user email', user.email, user.password);
          console.warn('Login Successful!');
          // TODO: navigate to the home screen
          navigation.navigate('DisplayScreens');
        })
        .catch(error => console.log(error.message));
    } else {
      console.log('Email and password are required');
      console.warn('Login Failed!');
    }
  };

  //sign up function
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Created user with email', user.email, user.password);
      })
      .catch(error => console.log(error.message));
    navigation.navigate('Login');
  };

  // UI for login screen and takes user input
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.text}>FitBaby</Text>

        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Email"
          iconType="mail"
          keyboardType="email-address"
        />

        <FormInput
          labelValue={password}
          placeholderText="Password"
          iconType="lock"
          onChangeText={userPassword => setPassword(userPassword)}
          secureTextEntry={true}
        />

        <FormButton buttonTitle="Sign In" onPress={onLoginPressed} />

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        <SocialButton
          buttonTitle="Sign In with Facebook"
          btnType="facebook"
          color="#4867aa"
          backgroundColor="#e6eaf4"
          onPress={() => fbLogin()}
        />

        <SocialButton
          buttonTitle="Sign In with Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => googleLogin()}
        />

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.navButtonText}>
            Don't have an account? Create here
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

// more UI for login
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
