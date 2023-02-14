import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, useWindowDimensions } from 'react-native';
import Logo from '../../../src/FitBaby_Logo.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import { initializeApp } from 'firebase/app';
import {addDoc, collection, getFirestore} from 'C:/Users/BenjaminNguyen/Fitbaby/node_modules/firebase/firestore';
import {app, db, auth} from '../../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => { //login screen

    //database variables into collection
    const db = getFirestore(app); //database
    const {email, setEmail} = React.useState(''); //email
    const {password, setPassword} = React.useState(''); //password

    const [loading, setLoading] = React.useState(false); 
    const [errorMessage, setErrorMessage] = React.useState('');

    //height used for logo size
    const {height} = useWindowDimensions(); 

    async function handleLogin() { //function to handle login into firebase, STILL WORKING ON THIS
        try {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 500));
            if (//if email and password are empty
                email === '' ||
                password === ''
            ){  //set error message
                setErrorMessage('Please fill in all fields');
                return;
                setLoading(false);
            }
            else {
                const docRef = await addDoc(collection(db, "users"), { //add user to database
                    email: 'test.email',
                    password: 'test.password',
                });
            setLoading(false);
            setSubmitted(true);
            console.log("Document written with ID: ", docRef.id);
        }  
    }catch(e){
        console.log("Error:", e);
    }};


    //Create an account using Auth.js
    /*const handleLogin = async () => {
        try {
            await createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    }*/

    const onLoginPressed = () => {
        handleLogin();
    }

    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password Pressed');
    }

    const onCreateAccountPressed = () => {
        console.warn('Create Account Pressed');
    }

    return (
        <ScrollView>
        <View style={styles.root}>
            <Image //logo
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode="center"
            source={Logo} />

            <Text style={[styles.bold, styles.underline]}>Login</Text>

            <CustomInput //input field for email
            placeholder="Email" 
            value={email} 
            setValue={setEmail}
            />

            <CustomInput //input field for password
            placeholder="Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
            />

            <CustomButton text="Login" onPress={onLoginPressed}/>
            <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} />
            <CustomButton text="Don't have an account? Create one!" onPress={onCreateAccountPressed} type="TERTIARY"/>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({ //styling for login screen
    root: {
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      width: '100%',
      height: 400,
      maxWidth: 500,
    },
    bold: {fontWeight: 'bold',},
    underline: {textDecorationLine: 'underline'},
  
  
  });

export default LoginScreen;