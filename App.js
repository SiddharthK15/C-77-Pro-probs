import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SpacecraftScreen from './screens/spacecraft'
import StarMapScreen from './screens/starmap'
import DailyLogoScreen from './screens/dailylogo'
import HomeScreen from './screens/homescreen'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator()

export default function App() {
  return (
    <View>
      <NavigationContainer>
     <Stack.Navigator initialRouteName = 'Stellar Stage' screenOptions = {{headerShown:false}}>
       <Stack.Screen name = 'Home' component = {HomeScreen}/>
       <Stack.Screen name = 'Spacecraft' component = {SpacecraftScreen}/>
       <Stack.Screen name = 'StarMap' component = {StarMapScreen}/>
       <Stack.Screen name = 'DailyLogo' component = {DailyLogoScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
