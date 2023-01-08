import React, {useContext, useEffect} from 'react';
import AuthContext from '../context/AuthContext';
import AppContext from '../context/AppContext';
import { View, Text, StyleSheet } from 'react-native';
import { BASE_URL, API_KEY } from '../services/ApiHandler';
import { createGuestSession, createGuestSessionStarted} from '../context/Actions';
import {AsyncStorage} from 'react-native';
import { useState } from 'react/cjs/react.production.min';

export const GuestLogin = () => {
    const { state, dispatch } = useContext(AppContext);
    const { guestSession } = state;
    const { loading, error, data } = guestSession; 

    useEffect(() => {
        dispatch(createGuestSessionStarted);
        const url = `${BASE_URL}/authentication/guest_session/new?api_key=${API_KEY}`;
        console.log(url)
        const request = {};
        createGuestSession(url, request, dispatch);
    }, []);

//const [sessionId, setSessionId] = useState("")

/* const saveSessionId = async () => {
    try {
        AsyncStorage.setItem("session_id", data.guest_session_id);
    }
    catch (error) {
        console.log(error);
    }
};

const getSessionId = async () => {
    try{
        const sessionId = await AsyncStorage.getItem("session_id");
        setSessionId (sessionId);
    }catch (error) {}
}; */

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
                
                   // console.log(JSON.stringify(data.guest_session_id))
                    //console.log(AsyncStorage.getItem("session_id"))

                global.session_id=data.guest_session_id
                console.log("id: " + global.session_id)

                
            } else {
                return (
                    <View style={styles.item}>
                        <Text>No data ....</Text>
                    </View>
                );
            }
        }
    }
}


const styles = StyleSheet.create({
    view: {
        paddingTop: 20,
        marginLeft: 20,
    },
    item: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "black",
        marginBottom: 200,
    },
    image: {
        width: 100,
        height: 150,
        marginBottom: 5,
    },
    text: {
        color: 'black',
    },
});

