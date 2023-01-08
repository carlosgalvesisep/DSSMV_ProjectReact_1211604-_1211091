import React, {useContext, useEffect} from 'react';
import AppContext from '../context/AppContext';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {BASE_URL, API_KEY, IMAGE_URL} from '../services/ApiHandler';
import { useNavigation } from '@react-navigation/native';
import {
  fetchPopularSeries,
  fetchPopularSeriesStarted,
} from '../context/Actions';

const SeriesList = () => {
  const {state, dispatch} = useContext(AppContext);
  const {popularSeries} = state;
  ({loading, error, data} = popularSeries);
  const url = `${BASE_URL}/tv/popular?api_key=${API_KEY}`;
  const request = {};


  useEffect(() => {
    dispatch(fetchPopularSeriesStarted);

    fetchPopularSeries(url, request, dispatch);
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
            navigation.navigate('SeriesDetailsScreen',{data: item.id})}>  
              <View style={styles.view}>
                <Image
                  style={styles.image}
                  source={{uri: IMAGE_URL + item.poster_path}}
                  resizeMode="cover"
                />

                <Text style={styles.text}> {item.name}</Text>
              </View>
              </TouchableOpacity>
            )}
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
    marginRight: 20,
  },
  item: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
    marginBottom: 200,
  },
  image: {
    width: 150,
    height: 200,
    marginBottom: 5,
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    alignSelf: 'center'
  },
});

export default SeriesList;
