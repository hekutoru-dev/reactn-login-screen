
// Import required dependencies.
import React, { useState, Component } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';

// Added dependencies.
import { NavigationContainer } from '@react-navigation/native';

// Import Custom Components.
import Header from './src/components/Header';
import LogInCard from './src/components/LogInCard';
import Logo from './src/components/Logo';
import Form from './src/components/Form';


export default function App() {

  // RENDER SCREENS
  return (
    // Main View   
    <NavigationContainer>
      <View style={styles.container}>

        <StatusBar backgroundColor='#DD2C00' barStyle='light-content' />
        <Header title="GPS Monitor" />

        <Logo />
        <Form />

      </View>
    </NavigationContainer>
  );
}


// Erase flex:1.
// Define all styles for screen.
const styles = StyleSheet.create({
  container: {
    flex: 1,  // Takes all space availabe.
    backgroundColor: '#333333'
    //alignItems: 'center',
    //justifyContent: 'center'  
  }
});
