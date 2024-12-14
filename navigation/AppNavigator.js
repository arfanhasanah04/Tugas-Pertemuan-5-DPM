// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Text, StyleSheet, View } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f8f8f8', // Warna header lebih lembut
            height: 100, // Tinggi header disesuaikan
            shadowOpacity: 0, // Menghilangkan bayangan
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#4e4e4e',
            textAlign: 'center', // Menyelaraskan judul di tengah
            fontFamily: 'serif', // Gunakan font dengan gaya seni
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'My Art Gallery', 
          }} 
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={{
            title: 'Artwork Details',
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
