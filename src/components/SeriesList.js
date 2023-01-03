import React, {useContext, useEffect} from 'react';
import AppContext from '../context/AppContext';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {BASE_URL, API_KEY, IMAGE_URL} from '../services/ApiHandler';
import {
  fetchPopularSeries,
  fetchPopularSeriesStarted,
  fetchTopRatedSeries,
  fetchTopRatedSeriesStarted,
} from '../context/Actions';

const SeriesList = ({requestParameter}) => {
  const {state, dispatch} = useContext(AppContext);
  ({loading, error, data} = state);
  const url = `${BASE_URL}/${requestParameter}?api_key=${API_KEY}`;
  const request = {};

  switch (requestParameter) {
    case 'tv/popular':
      fetchStarted = fetchPopularSeriesStarted;
      fetchSeries = fetchPopularSeries(url, request, dispatch);
      const {popularSeries} = state;
      ({loading, error, data} = popularSeries);
      break;

    case 'tv/top_rated':
      fetchStarted = fetchTopRatedSeriesStarted;
      fetchSeries = fetchTopRatedSeries(url, request, dispatch);
      const {topRatedSeries} = state;
      ({loading, error, data} = topRatedSeries);
      break;
  }

  useEffect(() => {
    dispatch(fetchStarted);

    fetchSeries;
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
        return (
          <FlatList
            horizontal
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.view}>
                <Image
                  style={styles.image}
                  source={{uri: IMAGE_URL + item.poster_path}}
                  resizeMode="cover"
                />

                <Text style={styles.text}> {item.name}</Text>
              </View>
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

export default SeriesList;
