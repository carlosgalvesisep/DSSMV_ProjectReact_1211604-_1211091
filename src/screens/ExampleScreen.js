import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


function ExampleScreen () {

    return (
        <View style = {styles.container}>
            <Text style={styles.text}>Exemplo</Text>
        </View>
    )
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
   },
   text: {
    color:'black'
   }
});

export default ExampleScreen;