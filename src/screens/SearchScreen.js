import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { FlatList, View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { API_KEY, BASE_URL, IMAGE_URL } from '../services/ApiHandler'
import { fetchSearchMovies, fetchSearchMoviesStarted } from '../context/Actions';



function SearchScreen({ navigation }) {

    let [movieInfo, setMoviesInfo] = useState("");
    const { state, dispatch } = useContext(AppContext);
    const { search } = state;
    const {firstSearch, loading, error, data } = search;

        const getMoviesInfo= (q)=>{
            dispatch(fetchSearchMoviesStarted());
            const url = BASE_URL + '/search/multi' + '?api_key=' + API_KEY + '&query='+ q;
            const request = {};
            fetchSearchMovies(url, request, dispatch);
        }
        
    if (firstSearch === true) {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Type something' style={styles.input} value={movieInfo} onChangeText={(value) => setMoviesInfo(value)} />
                <Button title="Search" onPress={() => getMoviesInfo(movieInfo)} />
            </View>
        );
    }
    if (loading === true) {
        return (
            firstSearch === false,
            <View style={styles.item}>
                <Text>Loading ....</Text>
            </View>
        );
    }
    else {
        if (error !== null) {
            return (
                firstSearch === true,
                <View style={styles.item}>
                    <Text>Error ....</Text>
                </View>
            );
        } else {
            if (data.length > 0) {
                return (
                    firstSearch === false,
                    
                    <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                (
                    <TouchableOpacity 
                    onPress={() => 
                    navigation.navigate('DetailsScreen',{data: item.id})}>       
          
                    <View style={styles.view}>
                        <Image
                        style={styles.image}
                        source={{uri: IMAGE_URL + item.poster_path}}
                        resizeMode="cover"
                
                    />
                        <Text style={styles.text}> {item.title} {item.name}</Text>
                    </View>
                    </TouchableOpacity>
                    
                )
                }
          />
                );
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
        marginRight: 20,
      },
    container: {
        flex: 1,
        backgroundColor: '#fff<',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        alignSelf: "stretch",
        margin: 8,
        padding: 4
    },
    item: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "black"
    },
    image: {
        width: 200,
        height: 300,
        marginBottom: 5,
        alignSelf: 'center',
      },
      text: {
        color: 'black',
        alignSelf: 'center',
      },
});

export default SearchScreen;