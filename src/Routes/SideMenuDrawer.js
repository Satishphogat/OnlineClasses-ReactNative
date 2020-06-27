import * as React from 'react';
import { Button, View, Image } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../ViewControllers/Tabbar/Home.js';
import SideMenu from '../ViewControllers/SideMenu/SideMenu.js';
import Settings from '../ViewControllers/Tabbar/Settings';
import { Images } from '../Utility/Constant.js'
import { BottomTabBar } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const drawerNavigator1 = createDrawerNavigator(
  {
      Home: {
          screen: Home,
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
      initialRouteName: 'Home'
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
