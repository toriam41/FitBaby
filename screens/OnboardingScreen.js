import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      pages={[
        {
          backgroundColor: '#ffcd89',
          image: (
            <Image
              source={require('../assets/triangle.png')}
              style={styles.logo}
            />
          ),
          title: 'Learn to Love Exercise',
          subtitle: 'Grow with your gains',
        },
        {
          backgroundColor: '#ffe289',
          image: (
            <Image source={require('../assets/plan.png')} style={styles.logo} />
          ),
          title: 'Stay on Track',
          subtitle: 'Create routines that work for you',
        },
        {
          backgroundColor: '#85998a',
          image: (
            <Image
              source={require('../assets/dumbbell.png')}
              style={styles.logo}
            />
          ),
          title: 'Reach your Gym Goals',
          subtitle: 'Gain confidence in the gym',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

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
  onboardImage: {
    height: 150,
    width: 150,
  },
});

/* const Skip = ({... props}) => (
  <Button 
    title="Skip"
    color="#000"
    {... props}
  />
);
const Next = ({... props}) => (
  <Button 
    title="Next"
    color="#000"
    {... props}
  />
);
const Done = ({... props}) => (
  <Button 
    title="Done"
    {... props}
  />
); */
/* SkipButtonComponent={Skip}
        NextButtonComponent={Next} 
        DoneButtonComponent={Done}*/
