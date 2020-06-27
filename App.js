import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Parent from './Parent.js';
import Login from './src/ViewControllers/Authentication/Login.js' 
import ForgotPassword from './src/ViewControllers/Authentication/ForgotPassword.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './src/Routes/TabNavigator.js'
import AppNavigator from './src/Routes/AppNavigator.js';
import DrawerNavigator from './src/Routes/SideMenuDrawer.js';

export default class App extends Component {
  render() {
    return (
          <DrawerNavigator />
    )
  }
}
