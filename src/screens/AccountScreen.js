import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { BASE_URL, API_KEY } from '../services/ApiHandler';
import {AsyncStorage} from 'react-native';



function AccountScreen () {
    const {height} = useWindowDimensions();




            return ( 
    
                        console.log(AsyncStorage.getItem('session_id'))

                
			    //console.log('https://www.themoviedb.org/authenticate/' + data.request_token)
            );
        
    



};

const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
    padding: 20
   }
});

export default AccountScreen;