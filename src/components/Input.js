import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Input = ({value, setValue, placeholder, isSecure}) => {
    return (
        <View style = {styles.container}>
            <TextInput style = {styles.input}
                value = {value}
                onChangeText={setValue}
                placeholder = {placeholder}
                placeholderTextColor= 'grey'
                secureTextEntry={isSecure}
                />
        </View>
    )
};

const styles = StyleSheet.create({
   container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'black',
    barderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginVertical: 10,
   },
   input: {
    color: 'black',
   },
});

export default Input;