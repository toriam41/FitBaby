import React, { useState } from 'react';
import {View, Text, StyleSheet, Modal, Pressable, Image, Alert} from 'react-native';
import {auth} from '../../../firebase-config';
import Icon from "react-native-vector-icons/AntDesign";
import Menu from "react-native-vector-icons/Feather";
import Exit from "react-native-vector-icons/Feather";


const HomeScreen = ({navigation}) => {  //navigation is a prop that is passed to the component
  // display date in proper format
  const formatDate = (date) => {
    const options = { weekday: 'long',  month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

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

  // daily date variable
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  // menu state variable to toggle menu
  const [showMenu, setShowMenu] = useState(false);
  
  const triggerMenu = () => {
    setShowMenu(true)
  }

  // icons
  const arrow_icon = (
    <Icon name="right" size={20} color="#fff" style={{marginLeft: 5}}/>
    );
  const menu_icon = (
    <Menu name="menu" size={20} onPress={triggerMenu} color="grey" style={{marginLeft: 5}}/>
    );
    const exit_icon = (
      <Exit name="x" size={20}  onPress={() => {setShowMenu(false)}} color="grey" style={{marginLeft: 5}}/>
      );

  return (
    <View style={styles.container}>
      <View style={{marginTop: 70, marginLeft: 20, marginRight: 20, }}>
        
        <View style={{flexDirection: "row", width:"100%", justifyContent: "space-between"}}>
          <Text style={{color:"black", }}>{formattedDate}</Text>
          {menu_icon}
        </View>

        {/* hamburger menu */}
        <Modal transparent={true} visible={showMenu}>
        <View style={{backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: "center", }}>
            <View style={{
                margin: 20,
                height: "40%",
                width: "75%",
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 35,
                
                alignItems: 'center',
            }}>
              <View  style={{position: 'absolute', top: 0, right: 0, margin: 10}}>
                {exit_icon}
              </View>
              
              <View style={{margin: 10, padding: 10, alignItems: 'center', justifyContent: 'center',}} >
                <Text style={{color: "#000000", marginBottom: 20,}}>Settings</Text>

                <Pressable style={[styles.item, {backgroundColor: "#ffcd89", elevation: 5,}]}  onPress={() => {console.log("pressed!")}}>
                  <Text style={styles.itemText}>Account</Text>  
                </Pressable>
                <Pressable style={[styles.item, {backgroundColor: "red", elevation: 5,}]}  onPress={() => {handleSignOut()}}>
                  <Text style={styles.itemText}>Log Out</Text>  
                </Pressable>
              </View>

            </View>
          </View>
        </Modal>
        
        {/* greeting and avatar */}
        <View style={{flexDirection:"row", marginTop: 10, padding: 10, height:"40%", width: "100%",}}>
          <View style={{width:"35%", marginRight: 15, justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"black", }}>Hello, Tori!</Text>
            <Text style={{color:"black", }}>Welcome back!</Text>
          </View>
          <View style={{width:"60%",  marginLeft: 5, justifyContent:"center", alignItems:"center"}}>
          <Image
            resizeMode="contain"
            style={{height:"100%", width:"100%"}}
            source={require("../../../assets/baby.png")} />
          </View>
        </View>

       {/* tips of the day */}
        <Text style={{color:"black", }}>Tips of the Day</Text>
        
        <View style={{flexDirection:"row", marginTop: 10, marginBottom: 0,}}>
          <Pressable onPress={() => {Alert.alert("Drinking water is essential to staying hydrated!")}} style={{height:"80%", width: "45%", borderRadius: 20, backgroundColor:"#eec958", margin: 10, justifyContent:"center", alignItems:"center", elevation: 5, }}>
            <Text style={{color:"#fff", }}>Drink a glass{'\n'}of water</Text>
            <View style={{flexDirection: "row", position: "absolute", bottom: 20, left: 20}} >
              <Text style={{color:"#fff", }}>Read more</Text>
              {arrow_icon}
            </View>
          </Pressable>
          <Pressable onPress={() => {Alert.alert("Stretching is key for muscle development and injury prevention!")}} style={{height:"80%", width: "45%", borderRadius: 20, backgroundColor:"#98C6FC", margin: 10, justifyContent:"center", alignItems:"center", elevation: 5, shadowColor:"black"}}>
            <Text style={{color:"#fff", }}>Stretch often to{'\n'}keep limbs loose </Text>
            <View style={{flexDirection: "row", position: "absolute", bottom: 20, left: 20}} >
              <Text style={{color:"#fff", }}>Read more</Text>
              {arrow_icon}
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //styling the home screen
  container: {
    flex: 1, 
    backgroundColor: "white",
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: 40,
    width: 150,
    borderRadius: 50,
  },  
  itemText: {
    color: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
