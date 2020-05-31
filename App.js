import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Parent from './Parent.js';
import Login from './src/Login.js';
import ForgotPassword from './src/ForgotPassword.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      // <Login></Login>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="Forgot Password" component={ForgotPassword}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
