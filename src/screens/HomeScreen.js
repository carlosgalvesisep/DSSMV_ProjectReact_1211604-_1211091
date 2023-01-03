import {useEffect, useState} from 'react';
import {StyleSheet, View,ScrollView, Text} from 'react-native';
import { API_KEY, BASE_URL, IMAGE_URL } from '../utils/ApiHandler';
import MoviesList from '../components/MoviesList';
import SeriesList from '../components/SeriesList';
import { fetchPopularMovies, fetchPopularMoviesStarted, fetchUpcomingMovies, fetchUpcomingMoviesStarted } from '../context/Actions';



function HomeScreen() {

    return (
		    <ScrollView style={styles.scrollView}>
			<MoviesList requestParameter='movie/popular' />
            <MoviesList requestParameter='movie/upcoming'/>

        </ScrollView>
		/*<ScrollView style={styles.scrollView}>
		<SeriesList requestParameter='/tv/popular' />
		<SeriesList requestParameter='/tv/popular'/>
		<SeriesList requestParameter='/tv/top_rated' />
		<SeriesList requestParameter='/tv/top_rated' />

	</ScrollView>*/
    );





};
const styles = StyleSheet.create({
  	container: {
		flex: 1,
		padding:10,
		backgroundColor: '#000',
		alignItems: 'center',
  	},
	scrollView: {
		marginLeft: 20,
		marginTop: 20,
		marginBottom:50,
		flex: 1,
	},
	mainContent: {
		width: '100%',
		top: 50,
	},
	image: {
		alignItems: 'center',
		marginBottom: 20,
	},
});

export default HomeScreen;
