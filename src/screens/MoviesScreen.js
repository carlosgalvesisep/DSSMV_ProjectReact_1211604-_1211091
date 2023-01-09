import React from 'react';
import {StyleSheet, View,ScrollView, Text} from 'react-native';
import UpcomingList from '../components/UpcomingList'
import LatestMoviesList from '../components/LatestMoviesList';
import TopRatedMoviesList from '../components/TopRatedMoviesList';
import PopularMoviesList from '../components/PopularMoviesList';


function MoviesScreen() {

    return (
			<ScrollView style= {styles.scrollView}>
				<Text style={styles.titleTop}> Popular Movies</Text>
				<PopularMoviesList/>
				<Text style={styles.title}> Top Rated Movies</Text>
				<TopRatedMoviesList/>
				<Text style={styles.title}> Latest Movies</Text>
				<LatestMoviesList/>
				<Text style={styles.title}> Upcoming Movies</Text>
				<UpcomingList/>
			</ScrollView>
				
    );





};
const styles = StyleSheet.create({
	scrollView: {
		marginLeft: 10,
		marginTop: 20,
		marginBottom:50,
		flex: 1,
	}, 
	titleTop: {
		color: "black",
		fontWeight: "500",
		fontSize: 15,
		alignSelf: 'center',
	},
	title: {
		color: "black",
		fontWeight: "500",
		fontSize: 15,
		marginTop: 15,
		alignSelf: 'center',
	},
});

export default MoviesScreen;
