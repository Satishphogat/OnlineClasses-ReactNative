import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React, {Component} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'
import 'react-native-gesture-handler';
import Login from '../ViewControllers/Authentication/Login.js';
import ForgotPassword from '../ViewControllers/Authentication/ForgotPassword.js';
import TabNavigator from './TabNavigator.js'
import SideMenu from '../ViewControllers/SideMenu/SideMenu.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigtor from './SideMenuDrawer.js';

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                headerShown: false,
            }
        },
        ForgotPassword: {
            screen: ForgotPassword,
            navigationOptions: {
                headerShown: true,
            }
        },
        Home: {
            screen: DrawerNavigtor,
            navigationOptions: {
                headerShown: false
            }
        }
    },
    {
        initialRouteName: 'Login'
    }
)

const App = createAppContainer(AppNavigator);

export default App;

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const AppNavigator = () => {
//     return (
//           <Stack.Navigator>
//           <Stack.Screen name="Login" 
//           component={Login} options={{headerShown: false}}>
//           </Stack.Screen>
//           <Stack.Screen name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
//           <Stack.Screen name="Home" component={SideMenuDrawer} options={{title: "Home1", gestureEnabled: false, headerShown: false}}></Stack.Screen>
//           </Stack.Navigator>
//       )
// }

// export default AppNavigator;