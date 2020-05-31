import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import 'react-native-gesture-handler';
import Login from '../src/Login.js';
import ForgotPassword from '../src/ForgotPassword.js';
import TabNavigator from './TabNavigator.js'
import DrawerNavigator from './DrawerNavigator.js'

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
          <Stack.Navigator options={{gestureEnabled: false}}>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false, gestureEnabled: false}}></Stack.Screen>
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{title: "", gestureEnabled: false, headerTransparent: true}}></Stack.Screen>
          <Stack.Screen name="Home" component={TabNavigator} options={{title: "Home", gestureEnabled: false, headerTransparent: true}}></Stack.Screen>
          <Stack.Screen name="drawer" component={DrawerNavigator} options={{title: "Settings", gestureEnabled: false, headerTransparent: true}}></Stack.Screen>

          </Stack.Navigator>
      )
}

export default AppNavigator;

const styles = () => {
    
}