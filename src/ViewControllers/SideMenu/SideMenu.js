import React, { Component } from 'react'
import { View, SafeAreaView, Text, StyleSheet, Image, Alert } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Constant, { Images } from '../../Utility/Constant.js'
import SeparatorView from '../../Components/SeparatorView.js'
import renderSeparatorView from '../../Components/SeparatorView.js'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Tabbar/Home.js'
import Login from '../Authentication/Login.js'
import ImagePicker from 'react-native-image-picker';
import Profile from './Profile/Profile.js'

const Data = [
    {
        title: 'Home',
        image: Images.home
    },
    {
        title: 'Profile',
        image: Images.profileIcon
    },
    {
        title: 'Notifications',
        image: Images.notification
    },
    {
        title: 'Contact Us',
        image: Images.contactUs
    },
    {
        title: 'Logout',
        image: Images.logout
    },
]

const options = {
    title: 'Select Profile Picture',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  

export default class SideMenu extends Component {

    state = {
        avatarSource: String
    }

    logout = () => {

        Alert.alert('Alert', 'Are you sure you want to logout!', 
        [
            {text: 'Cancel'},
            {text: 'OK', onPress: () => this.props.navigation.navigate('Login')
        }
          ],
          {cancelable: false},
        )
    }

    onPress = (item) => {
        if (item.title == 'Logout') {
            this.logout();
        } else if (item.title == 'Home') {
            this.props.navigation.closeDrawer();
        } else if (item.title == 'Profile') {
            this.props.navigation.navigate('Profile')
        } else {
        alert('Work in progress');
    }
    }

    onPressProfile = () => {
       this.openSheet()
    }

    openSheet = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
                alert(response.error)
            } else if (response.customButton) {
                alert(response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
              });
            }
          });
    }

    renderSeparatorView = () => {
        return (
            <View style={{
                height: 1,
                width: '90%',
                backgroundColor: CustomColor.lightGray,
                alignSelf: 'center'
            }}
            />
        )
    };

    headerView = () => {
        return (
            <View style={style.headerContainerView}>
                <TouchableOpacity style = {{flexDirection: 'row'}} onPress={() => this.onPressProfile()}>
                <Image style = {style.profileImage} source={Images.profile}></Image>
                <Image style = {style.editImage} source={Images.edit}></Image>
                </TouchableOpacity>
                <Text style = {style.profileText}>Sagar Kumar</Text>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <FlatList
                        data={Data}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={style.cellContainer} onPress={() => this.onPress(item)}>
                                <Image style={style.cellIcon} source={item.image}></Image>
                                <Text style={style.text}>{item.title}</Text>
                            </TouchableOpacity>
                        }
                        ItemSeparatorComponent={this.renderSeparatorView}
                        ListHeaderComponent={this.headerView}
                        stickyHeaderIndices={[0]}
                    ></FlatList>
                </View>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    headerContainerView: {
        height: 200,
         flex: 1, 
         alignItems: 'center',
         justifyContent: 'space-evenly'
    },
    profileImage: {
        width: 130, 
        height: 130, 
        borderRadius: 65, 
        top: 10, 
        alignSelf: 'center'
    },
    editImage: {
        width: 50, 
        height: 50,
        position: 'absolute',
        resizeMode: 'contain',
        top: 70,
        left: -20
    },
    flatList: {
        padding: 20,
    },
    cellContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    cellIcon: {
         width: 30, height: 30 
    },
    text: {
        fontSize: 20,
        paddingLeft: 30,
    },
    profileText: {
        fontSize: 20
    }
})