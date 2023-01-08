import {StyleSheet, View,ScrollView, Text} from 'react-native';
import SeriesList from '../components/SeriesList';
import TopRatedSeriesList from '../components/TopRatedSeries';
import OnAirSeriesList from '../components/OnAirSeriesList';



function SeriesScreen() {

    return (
		<ScrollView style={styles.scrollView}>
		<Text style={styles.title}> Popular Series</Text>
		<SeriesList/>
		<Text style={styles.title}> Top Rated Series</Text>
		<TopRatedSeriesList/>
		<Text style={styles.title}> On Air Series</Text>
		<OnAirSeriesList/>
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

export default SeriesScreen;
