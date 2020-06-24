import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../ViewControllers/Tabbar/Home.js';
import SideMenu from '../ViewControllers/SideMenu/SideMenu.js';
import Settings from '../ViewControllers/Tabbar/Settings';

const Drawer = createDrawerNavigator();

export default function SideMenuDrawer() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SideMenu" component={SideMenu} />
      </Drawer.Navigator>
  );
}
