import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/WelcomeScreen';
import Notes from './screens/Notes';
import Footer from './Footer';

import { navigationRef } from './RootNavigation';
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="welcome"
      >
      <Stack.Screen
        name="welcome"
        component={WelcomeScreen}
      />  
      
      <Stack.Screen
        name="notes"
        component={Notes}
      /> 
      </Stack.Navigator>
      <Footer></Footer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*Sources
  https://docs.expo.dev/versions/latest/
  https://unsplash.com/photos/ugnrXk1129g
  https://www.w3schools.com/cssref/css3_pr_align-content.asp
  https://www.w3schools.com/cssref/css_colors.asp
  https://www.youtube.com/channel/UCHgS0H3T3459H1e9QWK_Ezg
*/ 