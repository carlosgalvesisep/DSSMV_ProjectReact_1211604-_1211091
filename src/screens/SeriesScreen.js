import {StyleSheet, View,ScrollView, Text} from 'react-native';
import SeriesList from '../components/SeriesList';
import { fetchPopularSeries, fetchPopularSeriesStarted, fetchTopRatedSeries, fetchTopRatedSeriesStarted } from '../context/Actions';



function SeriesScreen() {

    return (
		
		<ScrollView style={styles.scrollView}>
		<SeriesList requestParameter='tv/popular' />
		<SeriesList requestParameter='tv/top_rated' />

	</ScrollView>
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

export default SeriesScreen;
