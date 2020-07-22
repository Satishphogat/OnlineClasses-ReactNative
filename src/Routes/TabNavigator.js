import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {Component} from 'react'
import {Text, View} from 'react-native'
import 'react-native-gesture-handler';
import Home from '../ViewControllers/Tabbar/Home.js';
import Settings from '../ViewControllers/Tabbar/Settings.js';
import SettingDrawerNavigation from './SettingDrawerNavigation.js';
import SideMenuDrawer from './SideMenuDrawer.js';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={SideMenuDrawer} options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}></Tab.Screen>
        <Tab.Screen name="Settings" component={SettingDrawerNavigation} options={{headerShown: false}}></Tab.Screen>
      </Tab.Navigator>
  );
}