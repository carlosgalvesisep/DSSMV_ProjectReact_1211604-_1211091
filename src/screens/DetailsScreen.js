import {useEffect, useState} from 'react';
import {StyleSheet, View,ScrollView, Text} from 'react-native';



function DetailsScreen() {

    return (
                    <View style = {styles.container}>
                    <Text style={styles.text}>Exemplo...</Text>
                </View>
            )
    };



    
    const styles = StyleSheet.create({
      text: {
        color:'black'
      },
  });
  
  export default DetailsScreen;
  