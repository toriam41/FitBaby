
import React from 'react';
import { StatusBar } from "react-native"
import NavBar from './NavBar.js'; 

const DisplayScreens = () => {  // wrapper component in order to nest navigation

  return (
    <>
    <StatusBar translucent backgroundColor="transparent"/>
      <NavBar/>   
    </>
  )
}

export default DisplayScreens;
