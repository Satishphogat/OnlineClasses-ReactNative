import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Parent from './Parent.js';
import Login from './src/Login.js';
import ForgotPassword from './src/ForgotPassword.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './Routes/AppNavigator.js'

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppNavigator></AppNavigator>
        {/* <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
        </Stack.Navigator> */}
      </NavigationContainer>
    )
  }
}
