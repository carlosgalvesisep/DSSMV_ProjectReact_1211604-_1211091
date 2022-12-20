import React, {useContext, useEffect} from 'react';
import AppContext from '../context/AppContext';
import { fetchPopularMoviesStarted, fetchPopularMovies } from '../context/Actions';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { BASE_URL, API_KEY, IMAGE_URL } from '../services/ApiHandler';
//import MovieListItem from './UserListItem';


/* const MoviesList = (props) => {

    const { results } = props;
    return (
        <FlatList
            horizontal
            data={results}
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
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 20,
        marginLeft: 20,
    },
    text: {
        color: 'black',
    },
    image: {
        width: 200,
        height: 300,
        marginBottom: 5,
    },
  }); */
  

  const MoviesList = () => {
    const { state, dispatch } = useContext(AppContext);
    const { movies } = state;
    const { loading, error, data } = movies;
    useEffect(() => {
        dispatch(fetchPopularMoviesStarted());
        const url = BASE_URL + '/movie/popular' + '?api_key=' + API_KEY;
        const request = {};
        fetchPopularMovies(url, request, dispatch);
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
            if (data.length > 0) {
                return (
                    <FlatList
                        horizontal
                        data={results}
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
    item: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "black"
    },
});








export default MoviesList;