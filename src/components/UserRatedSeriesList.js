import React, {useContext, useEffect} from 'react';
import AppContext from '../context/AppContext';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {BASE_URL, API_KEY, IMAGE_URL} from '../services/ApiHandler';
import {useNavigation} from '@react-navigation/native';
import {
  fetchUserRatedSeries,
  fetchUserRatedSeriesStarted,
} from '../context/Actions';

const UserRatedSeriesList = () => {
  const {state, dispatch} = useContext(AppContext);
  const {userRatedSeries} = state;
  ({loading, error, data} = userRatedSeries);



  useEffect(() => {
    dispatch(fetchUserRatedSeriesStarted);
    const url = BASE_URL+ '/guest_session/'+global.session_id +'/rated/tv?api_key=' + API_KEY;
    console.log(url)
    const request = {};
    fetchUserRatedSeries(url, request, dispatch);
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
              <Text style={styles.textRating}> Rating: {item.rating}</Text>
                <Image
                  style={styles.image}
                  source={{uri: IMAGE_URL + item.poster_path}}
                  resizeMode="cover"                
                />
                <Text style={styles.text}> {item.name}</Text>
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
    alignSelf: 'center',
  },
  textRating: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 15,
  },
});

export default UserRatedSeriesList;
