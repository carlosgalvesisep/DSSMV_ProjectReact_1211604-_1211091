import React from 'react';
import {StyleSheet, View,ScrollView, Text} from 'react-native';
import MoviesList from '../components/MoviesList';
import SeriesList from '../components/SeriesList';



function RatesListScreen() {

    return (
			<ScrollView style= {styles.scrollView}>
				<Text style={styles.title}> Popular Movies</Text>
				<MoviesList/>
				<Text style={styles.title}> Popular Series</Text>
				<SeriesList/>
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
