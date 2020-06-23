import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {Component} from 'react'
import {Text, View} from 'react-native'
import 'react-native-gesture-handler';
import Home from '../ViewControllers/Tabbar/Home.js';
import Settings from '../ViewControllers/Tabbar/Settings.js';
import DrawerNavigator from './DrawerNavigator.js';
import SettingDrawerNavigation from './SettingDrawerNavigation.js';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={DrawerNavigator}></Tab.Screen>
        <Tab.Screen name="Settings" component={SettingDrawerNavigation} ></Tab.Screen>
      </Tab.Navigator>
  );
}