import React, {useContext, useEffect} from 'react';
import AppContext from '../context/AppContext';
//import { fetchPopularMoviesStarted, fetchPopularMovies } from '../context/Actions';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { BASE_URL, API_KEY, IMAGE_URL } from '../services/ApiHandler';
  

  const MoviesList = ({requestParameter, fetch, fetchStarted}) => {
    const { state, dispatch } = useContext(AppContext);
    const { movies } = state;
    const { loading, error, data } = movies;
    useEffect(() => {
        dispatch(fetchStarted());
        const url = `${BASE_URL}/${requestParameter}?api_key=${API_KEY}`;
        console.log('URL: ' + url)
        const request = {};
        fetch(url, request, dispatch);
        console.log("A:" + data.json);

    }, []);
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
            const {results} = data;

            console.log(data)
            console.log(data.length)
            console.log(IMAGE_URL)
            if (data.length > 0) {
                return (
                    <FlatList
                        horizontal
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <View style={styles.view}>
                                <Image style={styles.image}
                                    source={{ uri: IMAGE_URL + item.poster_path }}            
                                    resizeMode="cover"
                                />

                                <Text style={styles.text}> {item.title}</Text>


                            </View>
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








export default MoviesList;