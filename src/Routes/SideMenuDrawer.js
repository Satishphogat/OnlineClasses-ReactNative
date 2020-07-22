import * as React from 'react';
import { Button, View, Image } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../ViewControllers/Tabbar/Home.js';
import SideMenu from '../ViewControllers/SideMenu/SideMenu.js';
import Settings from '../ViewControllers/Tabbar/Settings';
import { Images } from '../Utility/Constant.js'
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import HomeAppNavigator from './HomeStackNavigator.js'//'../ViewControllers/SideMenu/SideMenu.js';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

//AIzaSyAK7CWP3TFK0ke_hkUfZWu7Zwky2IVqZu8  API KEY YOUTUBE

const drawerNavigator1 = createDrawerNavigator(
  {
      Home: {
          screen: HomeAppNavigator,
          navigationOptions: {
              headerShown: false
          }
      },
      SideMenu: {
        screen: SideMenu,
        navigationOptions: {
          headerShown: false
        }
      }
  },
  {
      initialRouteName: 'Home',
      contentComponent: SideMenu
  }
)

const DrawerNavigtor = createAppContainer(drawerNavigator1);

export default DrawerNavigtor;

// const Drawer = createDrawerNavigator();

// export default function SideMenuDrawer() {
//   return (
//       <Drawer.Navigator initialRouteName="Home" >
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="SideMenu" component={SideMenu} />
//       </Drawer.Navigator>
//   );
// }
