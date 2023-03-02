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
import {useNavigation} from '@react-navigation/native';
import {auth} from '../../../firebase-config';
import HomeScreen from '../HomeScreen;';

const LoginScreen = () => {
  //login screen

  const navigation = useNavigation();

  //height used for logo size
  const {height} = useWindowDimensions();

  //database variables into collection
  const [email, setEmail] = useState(''); //email
  const [password, setPassword] = useState(''); //password

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        //navigation.replace('Home');
      }
    });
    return unsubscribe;
  });

  //login function
  const handleLogin = () => {
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with user email', user.email, user.password);
          console.warn('Login Successful!');
          // TODO: navigate to the home screen
          navigation.navigate({HomeScreen});
        })
        .catch(error => console.log(error.message));
    } else {
      console.log('Email and password are required');
      console.warn('Login Failed!');
    }
  };

  //sign up function
  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  //button functions
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

        <Text style={[styles.bold, styles.underline]}>Login</Text>

        <CustomInput //input field for email
          placeholder="Email"
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />

        <CustomInput //input field for password
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Login" onPress={onLoginPressed} />
        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
        />
        <CustomButton
          text="Don't have an account? Create one!"
          onPress={onCreateAccountPressed}
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

export default LoginScreen;
