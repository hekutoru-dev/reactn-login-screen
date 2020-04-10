// Import required dependencies.
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return (
        // props.title <-- Header component --> title property: <Header title="Any Title"/>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text> 
        </View>
    );
};

// Define styles for header & title.
const styles = StyleSheet.create({
    header: {               
        width: '100%',
        height: 80,
        paddingTop: 36,
        backgroundColor: "#FFA000",
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {        
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 35        
    }
});

export default Header;