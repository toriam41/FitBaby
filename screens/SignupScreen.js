
import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { useNavigation } from '@react-navigation/native';
import {auth} from 'C:/Users/BenjaminNguyen/Fitbaby/src/firebase-config.js';

const SignupScreen =  () => {
    //database variables into collection
    const [email, setEmail] = useState(); 
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    //navigation
    const navigation = useNavigation();

    //check if user is logged in
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
              navigation.replace('Home');
          }
      })
      return unsubscribe;
    })

    const handleLogin = () => {
      navigation.navigate('Login');
    }

    //sign up function
    const handleSignUp = () => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Created user with email', user.email, user.password);
        })
        .catch((error) => console.warn(error.message))
    }

    //button functions
    const onLoginPressed = () => {handleLogin();}
    const onForgotPasswordPressed = () => {console.warn('Forgot Password Pressed');}
    const onCreateAccountPressed = () => {handleSignUp();}

    return (
        <View style={styles.container}>
          <Text style={styles.text}>Create an account</Text>
    
          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)} 
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
    
          <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
          />
    
          <FormInput
            labelValue={confirmPassword}
            onChangeText={(userPassword) => setConfirmPassword(userPassword)}
            placeholderText="Confirm Password"
            iconType="lock"
            secureTextEntry={true}
          />
    
          <FormButton
            buttonTitle="Sign Up"
            onPress={onCreateAccountPressed}
          />
    
          <View style={styles.textPrivate}>
            <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => navigation.navigate("Login")}>
              <Text style={styles.navButtonText}>Already have an account? Login here</Text>
            </TouchableOpacity>
            <Text style={styles.color_textPrivate}>
              By registering, you confirm that you accept our
            </Text>
            <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
              <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                Terms of service
              </Text>
            </TouchableOpacity>
            <Text style={styles.color_textPrivate}> and </Text>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Privacy Policy
            </Text>
          </View>
    </View>
  )
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
      },
      textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
      },
      color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
      },
})