import {useContext, useEffect} from 'react';
import React from 'react';
import {StyleSheet, View,ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import {API_KEY, BASE_URL, IMAGE_URL } from '../services/ApiHandler';
import AppContext from '../context/AppContext';
import { TextInput } from 'react-native';
import {
  fetchDetails,
  fetchDetailsStarted,
} from '../context/Actions';


function DetailsScreen(props) {
  const{state, dispatch} = useContext(AppContext);
  const {route} = props;
  const {details} = state;
  const {loading, error, data} = details;
  const id = route.params !== undefined ? route.params.data : null;
  const{navigation} = props;

  useEffect(() =>{
    dispatch(fetchDetailsStarted(id));
    const url = BASE_URL + '/movie/' + id + '?api_key=' + API_KEY;
    const request = {};
    fetchDetails(url, request, dispatch)
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
                  style={styles.image}
                ></Image>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.undertitle}> {data.tagline} </Text>
                <Text style={styles.titleOverview}> Overview </Text>
                <Text style={styles.textOverview}> {data.overview}</Text>
                <Text style={styles.textTitle}> Language:         Rating:           Release:              Duration:</Text>          
                <Text style ={styles.textLanguage}> {data.original_language}                <Text> {data.vote_average} </Text>       <Text> {data.release_date} </Text>       <Text> {data.runtime} min </Text> </Text> 
                
                <TouchableOpacity style={styles.button}>
                <TextInput style={{
                    borderBottonwidth: 1, 
                    borderBottonColor: 'white', 
                    textAlign: 'center', 
                    margintop: 20, 
                    color: 'grey', 
                    fontsize: 20,
                  }}
                    placeholder={'Rate it'} 
                    placeholderTextColor={'white'}
                    keyboardType = {'numeric'}
                    maxLength={2}
                    onChangeText={vall => setValue (vall)}></TextInput>
                <Text
              style={{
              margintop: 30, 
              marginBotton: 70, 
              color: 'black', 
              fontSize: 14,
            }}></Text>
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
    width: 100,
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',

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
  color: "white",
  fontSize: 15,
  marginTop: 12,

},
image:  { 
marginTop: 40,
borderRadius: 10,
overflow: 'hidden',
borderWidth: 0.5,
alignSelf: 'center',
borderColor: 'white',
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

  export default DetailsScreen;
  