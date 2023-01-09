import {useContext, useEffect, useState} from 'react';
import React from 'react';
import {StyleSheet, View,ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import {API_KEY, BASE_URL, IMAGE_URL } from '../services/ApiHandler';
import AppContext from '../context/AppContext';
import { TextInput } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import {
  fetchDetails,
  fetchDetailsStarted,
  postMovieRating,
  postMovieRatingStarted,
} from '../context/Actions';










 





function DetailsScreen(props) {
  const { state, dispatch } = useContext(AppContext);
  const {details} = state;
  const {loading, error, data} = details;
  const {route} = props;
  const id = route.params !== undefined ? route.params.data : null;
  console.log(id)
  console.log(global.session_id)
  const{navigation} = props;


  const [rating, setRating] = useState()


  function rateMovie () {

    const { movieRating } = state;
    const { loading, error, data } = movieRating;
    
    dispatch(postMovieRatingStarted);
    //const url = `${BASE_URL}/movie/`+route.params.data+'/rating?guest_session_id='+global.session_id+`?api_key=${API_KEY}`;
    //const url = `${BASE_URL}/movie/`+'424'+`/rating?api_key=${API_KEY}&guest_session_id=`+'61c00f18c1e94dadd02d303fc200733f';
    const url = `${BASE_URL}/movie/`+route.params.data+`/rating?api_key=${API_KEY}&guest_session_id=`+global.session_id;
    console.log(url)
    console.log(rating)
    const request = {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      method: 'post',
      body:  'value'+rating,
    };
    postMovieRating(url, request, dispatch);
  
  
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
            if (data.length != 0) {
  
                console.log(data.success)
                
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












  useEffect(() =>{
    dispatch(fetchDetailsStarted(id));
    const url = `${BASE_URL}/movie/` + id + `?api_key=${API_KEY}`;
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
                    width: 300,
                    height: 350,
                    uri: IMAGE_URL + data.poster_path
                  }}
                  style={styles.image}
                ></Image>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.undertitle}> {data.tagline} </Text>
                <Text style={styles.titleOverview}> Overview </Text>
                <Text style={styles.textOverview}> {data.overview}</Text>
                <Text style={styles.textTitle}> Language:         Rating:           Release:         Duration:</Text>          
                <Text style ={styles.textLanguage}> {data.original_language}              <Text>{data.vote_average} </Text>       <Text> {data.release_date} </Text>       <Text> {data.runtime} min </Text> </Text> 
                <Input placeholder="Rating" keyboardType = {'numeric'} value={rating} setValue={setRating} inputType={'numeric'} maxLenght={3} />
                <Button buttonText="Rate it!" onPress={rateMovie} />
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
  