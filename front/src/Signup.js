import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Signup({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.heading}>Welcome</Text>
                <View style={styles.form}>
                    <View style={styles.inputs}>
                        <TextInput style={styles.input} placeholder="First Name"></TextInput>
                        <TextInput style={styles.input} placeholder="Last Name"></TextInput>
                        <TextInput style={styles.input} placeholder="Email" autoCapitalize="none"></TextInput>
                        <TextInput secureTextEntry={true} style={styles.input} placeholder="Confirm Password"></TextInput>
                        <TextInput secureTextEntry={true} style={styles.input} placeholder="Password"></TextInput>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
                            <Text style={styles.buttonText}>SignIn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAlt} onPress={() => navigation.navigate('Login')} >
                            <Text style={styles.buttonAltText}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
    card: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: '80%',
        borderRadius: 20,
        maxHeight: 380,
        paddingBottom: '30%',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginBottom: '20%',
        color: 'darkturquoise',
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
        
    },
    inputs: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '30%',
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'darkturquoise',
        paddingTop: 15,
        fontSize: 16,
        minHeight: 40,
    },
    button: {
        width: '80%',
        backgroundColor: 'darkturquoise',
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginTop: '5%',

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },
    buttonAlt: {
        width: '80%',
        borderWidth: 1,
        height: 40,
        borderRadius: 50,
        borderColor: 'darkturquoise',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonAltText: {
        color: 'darkturquoise',
        fontSize: 16,
        fontWeight: '400',
    },
    message: {
        fontSize: 16,
        marginVertical: '5%',
    },
});
