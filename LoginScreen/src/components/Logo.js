// Import required dependencies.
import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Logo = props => {
    return (   
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('../assets/pin_location.png')} />    
        </View>
    );
};

const styles = StyleSheet.create({
    container :{
        marginTop: 50,        
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 150
    }

});

export default Logo;