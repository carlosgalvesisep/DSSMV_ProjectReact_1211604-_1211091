import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

import LogInScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { acc } from 'react-native-reanimated';

const loginName = 'Log in';
const accountName = 'Account';
const homeName = 'Home';
const watchlistName = 'Watch List';
const favouritesName = 'Favourites';

export default function App() {
  return (
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'grey',
    flex: 1,
  },
});
