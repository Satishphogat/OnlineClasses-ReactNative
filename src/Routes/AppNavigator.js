import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import 'react-native-gesture-handler';
import Login from '../ViewControllers/Authentication/Login.js';
import ForgotPassword from '../ViewControllers/Authentication/ForgotPassword.js';
import TabNavigator from './TabNavigator.js'
import DrawerNavigator from './DrawerNavigator.js'
import SideMenu from '../ViewControllers/SideMenu/SideMenu.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
          <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} ></Stack.Screen>
          <Stack.Screen name="SideMenu" component={SideMenu}></Stack.Screen>
          <Stack.Screen name="Home" component={TabNavigator} options={{title: "Home", gestureEnabled: false, headerTransparent: true}}></Stack.Screen>
          <Stack.Screen name="drawer" component={DrawerNavigator} options={{title: "Settings", headerTransparent: true}}></Stack.Screen>

          </Stack.Navigator>
      )
}

export default AppNavigator;

const styles = () => {
    
}