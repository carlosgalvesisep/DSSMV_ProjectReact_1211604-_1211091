import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppProvider from './src/context/AppProvider';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


import LogInScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import AccountScreen from './src/screens/AccountScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { acc } from 'react-native-reanimated';
import SeriesScreen from './src/screens/SeriesScreen';

const loginName = 'Log in';
const accountName = 'Account';
const homeName = 'Home';
const seriesName = 'Series';
const detailsName = 'Details';
const watchlistName = 'Watch List';
const favouritesName = 'Favourites';



function Home() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'orange',
      tabBarInactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Login" component={LogInScreen} 
            options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
          }} />
      <Tab.Screen name="Account" component={AccountScreen} 
      options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Movies" component={HomeScreen} 
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="movie-open" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Series" component={SeriesScreen} 
      options={{
        tabBarLabel: 'Series',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="television-classic" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  );
}



export default function App() {
  return (

    
<AppProvider> 
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}/>
    <Stack.Screen
      name="LoginScreen"
      component={LogInScreen}/>
      <Stack.Screen
      name="SeriesScreen"
      component={SeriesScreen}/>
    <Stack.Screen
      name="DetailsScreen"
      component={DetailsScreen}/>
      <Stack.Screen
      name="AccountScreen"
      component={AccountScreen}/>
      </Stack.Navigator>
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
