import React from 'react';
import {useState,useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Input from '../components/Input';
import Button from '../components/Button';
import { GuestLogin } from '../components/GuestLogin';
import AppContext from '../context/AppContext';
import { BASE_URL, API_KEY } from '../services/ApiHandler';
import { createGuestSession, createGuestSessionStarted} from '../context/Actions';


function LogInScreen () {

    const {height} = useWindowDimensions();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLogInPressed = () => {
        console.warn("Como diria o outro: 'Not yet Implemented' ");
    };

    const onGuestLoginPressed = () => {
        
        return(<GuestLogin/>)
    };

    return (
        <View style = {styles.container}>
            <Input placeholder="Username" value={username} setValue={setUsername}/>
            <Input placeholder="Password" value={password} setValue={setPassword} isSecure/>
            <Button buttonText="Log in" onPress={onLogInPressed}/>
            <Button buttonText="Log in as Guest" onPress={onGuestLoginPressed}/>
            <GuestLogin/>
            

        </View>
    )
};

const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
    padding: 20
   }
});

export default LogInScreen;