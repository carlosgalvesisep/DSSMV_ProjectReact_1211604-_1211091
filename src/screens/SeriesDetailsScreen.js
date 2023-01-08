import {useContext, useEffect} from 'react';
import React from 'react';
import {StyleSheet, View,ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import {API_KEY, BASE_URL, IMAGE_URL } from '../services/ApiHandler';
import AppContext from '../context/AppContext';
import {
  fetchSeriesDetails,
  fetchSeriesDetailsStarted,
} from '../context/Actions';


function SeriesDetailsScreen(props) {
  const{state, dispatch} = useContext(AppContext);
  const {route} = props;
  const {details} = state;
  const {loading, error, data} = details;
  const id = route.params !== undefined ? route.params.data : null;
  const{navigation} = props;

  useEffect(() =>{
    dispatch(fetchSeriesDetailsStarted(id));
    const url = BASE_URL + '/tv/' + id + '?api_key=' + API_KEY;
    const request = {};
    fetchSeriesDetails(url, request, dispatch)
  }, [])


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
      if (data.length != 0) {
        return (
              <View style={styles.view}>
              <ScrollView>
                <Text style={styles.Status}> {data.status}</Text>
              <Image
                  source={{ 
                    width: 200,
                    height: 250,
                    uri: 'https://image.tmdb.org/t/p/w500' + data.poster_path
                  }}
                  style={{
                    marginTop: 40,
                    borderRadius: 10,
                    overflow: 'hidden',
                    borderWidth: 0.5,
                    alignSelf: 'center',
                    borderColor: 'white',
                  }}
                ></Image>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.undertitle}> {data.tagline} </Text>
                <Text style={styles.titleOverview}> Overview </Text>
                <Text style={styles.textOverview}> {data.overview}</Text>
                <Text style={styles.textTitle}> Language:         Seasons:           Release:              Episodes:</Text>          
                <Text style ={styles.textLanguage}> {data.original_language}                       <Text> {data.number_of_seasons} </Text>            <Text> {data.first_air_date} </Text>          <Text> {data.number_of_episodes} ep </Text> </Text> 
                <Text style={styles.textTitle}> Available on: {data.homepage}</Text>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> RATE IT </Text>
                </TouchableOpacity>
          
                </ScrollView>
              </View>
             
          )
            }
        
      else {
        return (
          <View style={styles.item}>
          </View>
        );
      }
    }
  }

}
const styles = StyleSheet.create({
  button:{
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'grey',
    alignSelf: 'center',
    width: 100,
    height: 50,
    borderRadius: 10,
  },
  view: {
    flex:1,
    padding: 10,
  },
  title: {
    color: "black",
    fontWeight: "500",
    fontSize: 30,
    marginTop: 16,
    alignSelf: 'center',
},
undertitle: {
  color: "black",
  fontWeight: "500",
  fontSize: 13,
  marginTop: 10,
  alignSelf: 'center',
},
titleOverview: {
  color: "black",
  fontWeight: "500",
  fontSize: 23,
  marginTop: 30,
  alignSelf: 'center',

},
Status: {
  color: "black",
  fontWeight: "500",
  fontSize: 23,
},
buttonText: {
  color: "black",
  fontSize: 15,
  marginTop: 12,

},
  textLanguage: {
    color: 'grey',
    fontWeight: "400",
    fontSize: 15,
    marginLeft: 20,
    marginRight: 5,
    textTransform: "uppercase",   
  },
  textOverview: {
    color: 'black',
    fontWeight: "450",
    fontSize: 15,
    alignSelf: 'center',  
  },
  textTitle: {
      color: 'black',
      fontWeight: "500",
      fontsize: 25,
      marginTop: 30,
      marginBottom: 5,
  },
  item: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
    marginBottom: 200,
  },

});

  export default SeriesDetailsScreen;
  