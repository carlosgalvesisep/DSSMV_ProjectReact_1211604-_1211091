import {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { API_KEY, BASE_URL, IMAGE_URL } from '../utils/ApiHandler';
import MoviesList from '../components/MoviesList';



function HomeScreen() {

  	const initialData = {
      	loading: false,
      	error: null,
      	data: {
          results: [],    //array de respostas(filmes)
		  poster_path: ""
     	}
  	};

  	const parse = (response) => {
      	if (response.ok) {
          	return response.json();
      	} else {
          	throw new Error('Something went wrong ...');
      	}
  	};


  	const [popularMovies, setPopularMovies] = useState(initialData);

	const fetchPopularMovies = async () => {
		setPopularMovies({
      		...popularMovies,
			loading: true,
			error: null,
		});
        try {
            const response = await fetch(BASE_URL + '/movie/popular' +'?api_key=' + API_KEY);
            const obj = await parse(response);
            setPopularMovies({
                ...popularMovies,
                loading: false,
                error: null,
                data: { results: obj.results, poster_path: obj.poster_path }
            })
        } catch (error) {
            setPopularMovies({
                ...popularMovies,
                loading: false,
                error: error,
                data: {},
            })
  
        }
    }
      
	useEffect(() => {
        fetchPopularMovies();
        return () => { }
    }, []);
  
    const { loading, error, data } = popularMovies;
    if (loading == true) {
        return (<View>
            <Text Loading />
        </View>);
    } else {
        if (error) {
            return (
			<View>
                <Text Error />
            </View>);
        } else {
            const { results } = data;
            return (
			<View>
            	<MoviesList results={results} />
            </View>);
        }
    }

	/*
  	return (
    	<View style={styles.container}>
      		<View style={styles.mainContent}>
        		<View style={styles.image}>
          			<Image
						resizeMode="contain"
						source={require('../assets/tmdb-long-logo.png')}
						style={{width: '80%', height: 50}}
          			/>
        		</View>
		<ScrollView style={styles.scrollView}>
          <MovieSection
            movies={nowPlayingMovies}
            sectionTitle="Now playing in theaters..."
          />

          <MovieSection
            movies={popularMovies}
            sectionTitle="Popular movies right now..."
          />

          <MovieSection
            movies={upcomingMovies}
            sectionTitle="Find out these upcoming movies!"
          />

          <MovieSection
            movies={topRatedMovies}
            sectionTitle="Our all time top rated movies..."
          />
        </ScrollView>
      </View>
    </View>
  	);
	*/

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  scrollView: {
    marginLeft: 20,
    bottom: '20%',
    marginTop: 170,
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
