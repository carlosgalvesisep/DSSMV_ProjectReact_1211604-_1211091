import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Button = ({onPress, buttonText}) => {
    return (
        <Pressable onPress={onPress} style ={styles.container}>
            <Text style={styles.text}>{buttonText}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
    },
})

export default Button;