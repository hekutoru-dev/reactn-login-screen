// Import required dependencies.
import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Form from './Form';


const LogInCard = props => {
    return (        
        <View style={styles.card}>                    
            <Form />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {       
        shadowColor: 'black',   
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,    // Shadow properties only work on iOS  
        elevation: 5,   // This is for Android, so we can have that shadow
        backgroundColor: 'white',  // Default color is transparent.
        padding: 20,
        margin: 30,
        borderRadius: 15
    }
});

export default LogInCard;