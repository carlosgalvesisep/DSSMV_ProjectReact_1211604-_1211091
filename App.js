import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

import LogInScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';


const loginName = 'Log in';
const homeName = 'Home';
const watchlistName = 'Watch List';
const favouritesName = 'Favourites';

export default function App () {
    return (
    	<NavigationContainer>
    		<Tab.Navigator
				initialRouteName={homeName}
				screenOptions={({route}) => ({
					tabBarIcon: ({focused, color, size}) => {
					let iconName;
					let routeName = route.name;

					if (routeName === homeName) {
						iconName = focused ? 'home' : 'home-outline'
					} else if (routeName === loginName) {
						iconName = focused ? 'home' : 'home-outline'
					}

					return <Icon name = {iconName} size={size} color={color}/>
					},
        		})}>
				<Tab.Screen style={styles.root}
					name={loginName}
					component={LogInScreen}
				/>
				<Tab.Screen style={styles.root}
					name={homeName}
					component={HomeScreen}
				/>
        	</Tab.Navigator>
      	</NavigationContainer>
    );
}

const styles = StyleSheet.create({
    root: {
		backgroundColor: 'grey',
		flex: 1
    }
});