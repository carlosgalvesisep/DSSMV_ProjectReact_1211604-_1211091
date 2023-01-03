import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppProvider from './src/context/AppProvider';
const Tab = createBottomTabNavigator();

import LogInScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { acc } from 'react-native-reanimated';
import SeriesScreen from './src/screens/SeriesScreen';

const loginName = 'Log in';
const accountName = 'Account';
const homeName = 'Home';
const seriesName = 'Series';
const watchlistName = 'Watch List';
const favouritesName = 'Favourites';

export default function App() {
  return (

    
<AppProvider> 
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        tabBarOptions={{
          activeTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          //style={styles.root}
          name={loginName}
          component={LogInScreen}
          options={{
            tabBarLabel: 'Log in',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
          }}
        />
		<Tab.Screen
          //style={styles.root}
          name={accountName}
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          //style={styles.root}
          name={homeName}
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          //style={styles.root}
          name={seriesName}
          component={SeriesScreen}
          options={{
            tabBarLabel: 'Series',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="tv" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer> 
    </AppProvider> 
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'grey',
    flex: 1,
  },
});
