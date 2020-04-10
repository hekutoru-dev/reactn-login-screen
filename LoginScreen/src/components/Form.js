// Import required dependencies.
import React, { useState, createRef } from 'react';
import { StyleSheet, View, TextInput, Button, Text, TouchableNativeFeedback, Keyboard } from 'react-native';

const Form = props => {

    const [username, setUsername] = useState('');
    const [response, setResponse] = useState('');

    const pressButton = (response) => {
        setResponse(response)
    };

    const getUsername = (username) => {
        setUsername(username);
    };    

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Username" placeholderTextColor='#fff' onChangeText={getUsername} value={username}/>
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor='#fff' secureTextEntry/>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button style={styles.button} color='green'  title="Start" onPress={() => pressButton(username)} />
                </View>
                <View style={styles.button}>
                    <Button style={styles.button} color='green' title="Cancel"/>
                </View>
            </View>
            <View style={styles.textOutputContainer}>
                <Text style={styles.textOutput}>{response}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{   
        backgroundColor: '#333',        
        padding: 50,
        margin: 60,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 300,
        backgroundColor: '#9e9e9e',
        borderRadius: 25,
        paddingHorizontal: 20,
        marginBottom: 20,
        color: '#fff'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%'
    },
    button: {
        width: '40%'
    },
    textOutput: {
        marginTop: 20,
        color: "gray",
        fontStyle: "italic"        
    
    }
});

export default Form;