import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react'
import {Text, View} from 'react-native'
import 'react-native-gesture-handler';
import Login from '../src/Login.js';
import ForgotPassword from '../src/ForgotPassword.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
          <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
          </Stack.Navigator>
      )
}

export default AppNavigator;