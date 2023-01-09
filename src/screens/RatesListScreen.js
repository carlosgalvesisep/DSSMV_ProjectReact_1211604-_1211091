import React from 'react';
import {StyleSheet,ScrollView, Text} from 'react-native';
import UserRatedMoviesList from '../components/UserRatedMoviesList';
import UserRatedSeriesList from '../components/UserRatedSeriesList'; 



function RatesListScreen() {

    return (
			<ScrollView style= {styles.scrollView}>
				<Text style={styles.title}> Rated Movies</Text>
				<UserRatedMoviesList/>
				<Text style={styles.title}> Rated Series</Text>
				<UserRatedSeriesList/>
			
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
	title: {
		color: "black",
		fontWeight: "500",
		fontSize: 15,
		marginTop: 5,
		alignSelf: 'center',
	},
});

export default RatesListScreen;
