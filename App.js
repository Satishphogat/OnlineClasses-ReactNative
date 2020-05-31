import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Parent from './Parent.js';
import Login from './src/Login.js';
import ForgotPassword from './src/ForgotPassword.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export default class App extends Component {
  render() {
    return (
      // <Login></Login>
      <NavigationContainer>
              <ForgotPassword></ForgotPassword>
      </NavigationContainer>
    )
  }
}
