import React from "react";
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

function WelcomeScreen(props){
  return(
    <ImageBackground
      style={styles.background}
      source={require("../assets/forest-background.jpg")}
    >
      <Text style={styles.name}>forestnote</Text>

  </ImageBackground>
  );
}
  
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fff'
  }
})

export default WelcomeScreen;
