import React, {Component  } from "react";
import { View, SafeAreaView, Touchable, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from './ForgotPassword.js'

import TextField from '../../Components/TextField.js';//'.../Components/TextField.js';
import HeaderView from '../../Components/HeaderView.js';
import CommonButton from '../../Components/CommonButton.js';

import TabNavigator from '../../Routes/TabNavigator.js';//'.././Routes/TabNavigator.js'
import { Images } from "../../Utility/Constant.js";

import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../SideMenu/SideMenu.js'

class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          id: '',
          password: '',
          isLoginValid: false,
          isPasswordSecure: true
        };
      }

      onClickListner(type) {
        switch(type) {
          case 'keyboardNext':
            console.log(type)
            break
          case 'keyboardDone':
              console.log(type)
              break
          case 'forgotPassword':
            console.log('success')
            this.props.navigation.navigate('ForgotPassword')
            break
          case 'showHidePassword':
            this.showHidePress()
        }
      }

      checkLoginValidation = () => {
        if (this.state.id == "") {
          alert('Please enter email id')
        } else if (this.state.password == "") {
          alert('Please enter password')
        } else {
          isLoginValid = true
        }
      }

      showHidePress = () => {
        console.log(this.state.isPasswordSecure)
        this.setState({isPasswordSecure: !this.state.isPasswordSecure})
      }

      loginButtonAction = () => {
        // this.props.navigation.openDrawer();      // this.props.navigation.openDrawer()
        this.props.navigation.navigate('Home')
      }

    render() {
        return (
        <SafeAreaView style={{flex: 1}}>

            <HeaderView title='Login'></HeaderView>
            
            <TextField label = 'Email' 
            onChange={(text) => {
              this.setState({id: text.replace(/\s/g, '')})
            }} 
            value= {this.state.id}
            keyboardType = {'email-address'}
            returnKeyType = {'next'}
            nextButtonAction = {() => this.onClickListner('next')}
             ></TextField>

            <TextField style={{ }} label = 'Password' 
            onChange={(text) => {
              this.setState({password: text})
            }}
            value={this.state.password}
            secureTextEntry={this.state.isPasswordSecure}
            ></TextField>

            <TouchableOpacity onPress = {() => this.onClickListner('showHidePassword')} style = {styles.showHideContainer}>
            <Image source = {this.state.isPasswordSecure ? Images.eye : Images.closeEye} style = {{width: 40, height: 40}}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPasswordButton} onPress = {() => this.onClickListner('forgotPassword')}>
              <Text style = {styles.forgotPasswordText}>forgot password?</Text>
            </TouchableOpacity>

            <CommonButton callback={this.loginButtonAction} title={'Login'}></CommonButton>
        </SafeAreaView>
        )
    }
}

export default Login;

const styles = StyleSheet.create ({
  forgotPasswordButton: {
    width: 160, 
    height: 40, 
    alignSelf: 
    'flex-end', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  forgotPasswordText: {
    color: 'black', 
    fontSize: 16, 
    fontWeight: '400'
  }, 
  showHideContainer: {
    width: 40, 
    height: 40, 
    top: -65,  
    alignSelf: 'flex-end', 
    marginHorizontal: 40
  }
})