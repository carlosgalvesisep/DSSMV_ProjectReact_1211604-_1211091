import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { IMAGE_URL } from '../utils/ApiHandler';

const MoviesList = (props) => {

    const { results } = props;
    return (
        <FlatList
            horizontal
            data={results}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
                <View style={styles.view}>
                    <Image style={styles.image}
                        source={{ uri: IMAGE_URL + item.poster_path }}
                        resizeMode="cover"
                    />
                    <Text style={styles.text}> {item.title}</Text>
                </View>
            }
        />
    );
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 20,
        marginLeft: 20,
    },
    text: {
        color: 'black',
    },
    image: {
        width: 200,
        height: 300,
        marginBottom: 5,
    },
  });
  
export default MoviesList;