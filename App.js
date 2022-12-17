import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogInScreeen from './src/screens/LoginScreen';

export default function App () {
    return(
      <View style={styles.root}>
        <LogInScreeen/>
      </View>
    );
}

const styles = StyleSheet.create({
    root: {
      backgroundColor: 'grey',
      flex: 1
    }
});