import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Splash} from '../pages';
import {Homescreen} from '../pages';
import {Akun} from '../pages';
import {Pesanan} from '../pages';
import BottomNavigator  from '../component/';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Mainapp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Pesanan" component={Pesanan} />
        <Tab.Screen name="Akun" component={Akun} />
      </Tab.Navigator>
  );
};

const Route = () => {
  return (
    
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={Splash} options={{
        headerShown: false}}/>
      <Stack.Screen name="Mainapp" component={Mainapp} options={{
        headerShown: false}}/>
    </Stack.Navigator>
  );
  
};


export default Route;

const styles = StyleSheet.create({});
