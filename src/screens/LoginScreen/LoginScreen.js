import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/FitBaby_Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const LoginScreen = () => {
    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const {height} = useWindowDimensions();

    const handleLogin = async () => {
        try {
            await firebase
            .auth()
            .signInWithEmailAndPassword(username, password);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const onLoginPressed = () => {
        //CHANGE LINE FOR WHEN LOGIN PRESSED
        console.warn("Login Pressed");
    }

    const onForgotPasswordPressed = () => {
        //CHANGE LINE FOR FORGOT PASSWORD
        console.warn("Forgot Password Pressed");
    }

    const onCreateAccountPressed = () => {
        //CHANGE LINE FOR CREATE ACCOUNT
        console.warn("Create Account Pressed");
    }

    return (
        <ScrollView>
        <View style={styles.root}>
            <Image 
            source={Logo} 
            style={[styles.logo, {height: height * 0.3}]} 
            resizeMode = 'center'
            />
            
            <Text style={[styles.bold, styles.underline]}>Login</Text>

            <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername}
            />

            <CustomInput 
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

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '100%',
        maxWidth: 500,
        height: 400,
    },
    bold: {fontWeight: 'bold'},
    underline: {textDecorationLine: 'underline'},
});

export default LoginScreen;