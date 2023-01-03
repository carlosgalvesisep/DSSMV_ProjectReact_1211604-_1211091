import React, {useContext, useEffect} from 'react';
import AppContext from '../context/AppContext';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {BASE_URL, API_KEY, IMAGE_URL} from '../services/ApiHandler';
import { useNavigation } from '@react-navigation/native';
import {
  fetchPopularMovies,
  fetchPopularMoviesStarted,
  fetchUpcomingMovies,
  fetchUpcomingMoviesStarted,
} from '../context/Actions';

const MoviesList = ({requestParameter}) => {
  const {state, dispatch} = useContext(AppContext);
  ({loading, error, data} = state);
  const url = `${BASE_URL}/${requestParameter}?api_key=${API_KEY}`;
  const request = {};

  switch (requestParameter) {
    case 'movie/popular':
      fetchStarted = fetchPopularMoviesStarted;
      fetchMovies = fetchPopularMovies(url, request, dispatch);
      const {popularMovies} = state;
      ({loading, error, data} = popularMovies);
      break;

    case 'movie/upcoming':
      fetchStarted = fetchUpcomingMoviesStarted;
      fetchMovies = fetchUpcomingMovies(url, request, dispatch);
      const {upcomingMovies} = state;
      ({loading, error, data} = upcomingMovies);
      break;
  }

  useEffect(() => {
    dispatch(fetchStarted);

    fetchMovies;
  }, []);

  if (loading === true) {
    return (
      <View style={styles.item}>
        <Text>Loading ....</Text>
      </View>
    );
  } else {
    if (error !== null) {
      return (
        <View style={styles.item}>
          <Text>Error ....</Text>
        </View>
      );
    } else {
      if (data.length > 0) {
        
const navigation = useNavigation();
        return (
          <FlatList
            horizontal
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

                <Text style={styles.text}> {item.title}</Text>
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
};
const styles = StyleSheet.create({
  view: {
    paddingTop: 20,
    marginLeft: 20,
  },
  item: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
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
