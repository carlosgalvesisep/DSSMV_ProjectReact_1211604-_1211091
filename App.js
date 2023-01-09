import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppProvider from './src/context/AppProvider';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { GuestLogin } from './src/components/GuestLogin';


import LogInScreen from './src/screens/LoginScreen';
import MoviesScreen from './src/screens/MoviesScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { acc } from 'react-native-reanimated';
import SeriesScreen from './src/screens/SeriesScreen';
import SeriesDetailsScreen from './src/screens/SeriesDetailsScreen';
import RatesListScreen from './src/screens/RatesListScreen';
import SearchScreen from './src/screens/SearchScreen';




function Home() {
  return (
    
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'orange',
      tabBarInactiveTintColor: 'gray',
      style: { ...styles.tabBar
      }
    }}>
      <Tab.Screen name="Login" component={LogInScreen} 
            options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
          }} />
      <Tab.Screen name="Search" component={SearchScreen} 
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="movie-search" color={color} size={size} />
        ),
      }}/>
       <Tab.Screen name="Your Rated Films" component={RatesListScreen} 
      options={{
        tabBarLabel: 'Rated',
        tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="folder-star-outline" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Movies" component={MoviesScreen} 
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
      name="MoviesScreen"
      component={MoviesScreen}/>
    <Stack.Screen
      name="LoginScreen"
      component={LogInScreen}/>
      <Stack.Screen
      name="SeriesScreen"
      component={SeriesScreen}/>
    <Stack.Screen
      name="DetailsScreen"
      component={DetailsScreen}
      options={{ headerShown: false }}/>
      <Stack.Screen
      name="AccountScreen"
      component={SearchScreen}/>
      <Stack.Screen
      name="SeriesDetailsScreen"
      component={SeriesDetailsScreen}
      options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer> 
    </AppProvider> 
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    elevation: 0,
    borderRadius: 15,
    height: 90,
  }

});
