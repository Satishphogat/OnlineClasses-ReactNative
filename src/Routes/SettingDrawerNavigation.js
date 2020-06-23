import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../ViewControllers/Tabbar/Home.js';
import SideMenu from '../ViewControllers/SideMenu/SideMenu.js';
import Settings from '../ViewControllers/Tabbar/Settings.js';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator initialRouteName="Settings">
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="SideMenu" component={SideMenu} />
      </Drawer.Navigator>
  );
}
