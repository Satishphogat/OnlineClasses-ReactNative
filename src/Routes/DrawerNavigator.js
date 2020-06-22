import * as React from 'react';
import { Button, View, Settings } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../ViewControllers/Tabbar/Home.js';
import SideMenu from '../ViewControllers/SideMenu/SideMenu.js';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator initialRouteName="SideMenu">
        <Drawer.Screen name="SideMenu" component={SideMenu} />
      </Drawer.Navigator>
  );
}