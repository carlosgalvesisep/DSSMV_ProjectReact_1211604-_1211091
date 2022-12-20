import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { BASE_URL, API_KEY } from '../services/ApiHandler';



function AccountScreen () {
    const {height} = useWindowDimensions();



    //Criar Request Token
    const initialData = {
        loading: false,
        error: null,
        data: {
            request_token: ""
       }
    };

    const parse = (response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong ...');
        }
    };


    const [requestToken, setRequestToken] = useState(initialData);

    const createRequestToken = async () => {
        setRequestToken({
            ...requestToken,
            loading: true,
            error: null,
        });
        try {
            const response = await fetch(BASE_URL + '/authentication/token/new' +'?api_key=' + API_KEY);
            const obj = await parse(response);
            setRequestToken({
                ...requestToken,
                loading: false,
                error: null,
                data: { request_token: obj.request_token }
        })
        } catch (error) {
            setRequestToken({
                ...requestToken,
                loading: false,
                error: error,
                data: {},
            })
        }
    }

    useEffect(() => {
        createRequestToken();
        return () => { }
    }, []);

    const { loading, error, data } = requestToken;
    if (loading == true) {
        return (<View>
            <Text Loading />
        </View>);
    } else {
        if (error) {
            return (
                console.warn('Error!')
            );
            
        } else {
            const { requestToken } = data;
            return ( 
                <SafeAreaView>
                    <Text>
                        Hypercoiso
                    </Text>

                </SafeAreaView>
                
			    //console.log('https://www.themoviedb.org/authenticate/' + data.request_token)
            );
        }
    }



};

const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
    padding: 20
   }
});

export default AccountScreen;