import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.text}>FitBaby</Text>

          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText="Email"
            iconType="mail"
            keyboardType="email-address"/>
           
          <FormInput
            labelValue={password}  
            placeholderText="Password"
            iconType="lock"
            onChangeText={(userPassword) => setPassword(userPassword)}
            secureTextEntry={true}/>
              
          <FormButton 
            buttonTitle="Sign In"
            onPress={() => alert("Sign in clicked!")}/>

          <TouchableOpacity style={styles.forgotButton}>
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
            onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
          </TouchableOpacity>

        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
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
  }
});
