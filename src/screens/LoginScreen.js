import React from 'react';
import {useState,useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Input from '../components/Input';
import Button from '../components/Button';
import { GuestLogin } from '../components/GuestLogin';
import AppContext from '../context/AppContext';
import { BASE_URL, API_KEY } from '../services/ApiHandler';
import { createGuestSession, createGuestSessionStarted, createRequestToken, createRequestTokenStarted, createLoginSession, createLoginSessionStarted} from '../context/Actions';


function LogInScreen () {

    const {height} = useWindowDimensions();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const { state, dispatch } = useContext(AppContext);
     


    function tokenRequest () {

        const { requestToken } = state;
        const { loading, error, data } = requestToken;
        
        dispatch(createRequestTokenStarted);
        const url = `${BASE_URL}/authentication/token/new?api_key=${API_KEY}`;
        console.log(url)
        const request = {};
        createRequestToken(url, request, dispatch);


        if (loading === true) {
            return (
                <View style={styles.item}>
                    <Text>Loading ....</Text>
                </View>
            );
        }
        else {
            if (error !== null) {
                return (
                    
                    <View style={styles.item}>
                        <Text>Error ....</Text>
                    </View>
                );
            } else {
                if (data.length != 0) {
                    //global.session_id=data.guest_session_id;
                    //AsyncStorage.setItem("session_id", data.guest_session_id);
                    //AsyncStorage.setItem('session_id', data.guest_session_id)
                    
                        
                        //console.log(AsyncStorage.getItem("session_id"))
    
                    global.request_token=data.request_token
                    console.log(data)
                    console.log("token: " + global.request_token)
                    
                    
                } else {
                    return (
                        <View style={styles.item}>
                            <Text>No data ....</Text>
                        </View>
                    );
                }
            }
        }
    
    };


    function onLogInPressed () {

        tokenRequest()
        console.log(global.request_token)
        const { loginSession } = state;
        const { loading, error, data } = loginSession;
        
        dispatch(createLoginSessionStarted);
        const url = `${BASE_URL}/authentication/session/new?api_key=${API_KEY}`;
        console.log(url)
        const request = {
            method: 'post',
            body:  {'request_token':  global.request_token}
        };
        createLoginSession(url, request, dispatch);


        if (loading === true) {
            return (
                <View style={styles.item}>
                    <Text>Loading ....</Text>
                </View>
            );
        }
        else {
            if (error !== null) {
                return (
                    
                    <View style={styles.item}>
                        <Text>Error ....</Text>
                    </View>
                );
            } else {
                if (data.length != 0) {
                    //global.session_id=data.guest_session_id;
                    //AsyncStorage.setItem("session_id", data.guest_session_id);
                    //AsyncStorage.setItem('session_id', data.guest_session_id)
                    
                        
                        //console.log(AsyncStorage.getItem("session_id"))
    
                    console.log(data)
                    console.log("success: " + data.success)
                    
                    
                } else {
                    return (
                        <View style={styles.item}>
                            <Text>No data ....</Text>
                        </View>
                    );
                }
            }
        }
    
    };







    function onGuestLoginPressed () {

        const { guestSession } = state;
        const { loading, error, data } = guestSession;


            dispatch(createGuestSessionStarted);
            const url = `${BASE_URL}/authentication/guest_session/new?api_key=${API_KEY}`;
            console.log(url)
            const request = {};
            createGuestSession(url, request, dispatch);


            if (loading === true) {
                return (
                    <View style={styles.item}>
                        <Text>Loading ....</Text>
                    </View>
                );
            }
            else {
                if (error !== null) {
                    return (
                        
                        <View style={styles.item}>
                            <Text>Error ....</Text>
                        </View>
                    );
                } else {
                    if (data.length != 0) {
                        //global.session_id=data.guest_session_id;
                        //AsyncStorage.setItem("session_id", data.guest_session_id);
                        //AsyncStorage.setItem('session_id', data.guest_session_id)
                        
                        console.log(JSON.stringify("guest session data: " + data.guest_session_id))                            //console.log(AsyncStorage.getItem("session_id"))
        
                        global.session_id=data.guest_session_id
                        console.log("id: " + global.session_id)

                        //teste
                       //tokenRequest()
        
                        
                    } else {
                        return (
                            <View style={styles.item}>
                                <Text>No data ....</Text>
                            </View>
                        );
                    }
                }
            }
        
    
    };

    return (
        <View style = {styles.container}>
            <Input placeholder="Username" value={username} setValue={setUsername}/>
            <Input placeholder="Password" value={password} setValue={setPassword} isSecure/>
            <Button buttonText="Log in" onPress={onLogInPressed}/>
            <Button buttonText="Log in as Guest" onPress={onGuestLoginPressed}/>

            

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