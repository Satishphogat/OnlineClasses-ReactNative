import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import HeaderView from "./HeaderView.js";
import TextField from './TextField';
import CommonButton from './CommonButton';
import { PropTypes } from 'react'

class ForgotPassword extends Component {

    state = {
        id: String
    }

    onClickListner(type) {
        switch(type) {
          case 'keyboardDone':
              console.log(type)
              break
          case 'forgotPassword':
            break
        }
      }

    myCallback = () => {
      this.props.navigation.navigate('Login')
      };

    render() {
        return(
            <SafeAreaView style={{flex: 1}}>

            <HeaderView title='Forgot Password'></HeaderView>

            <TextField label = 'Email' 
            onChange={(text) => {
              this.setState({id: text.replace(/\s/g, '')})
            }} 
            value= {this.state.id}
            keyboardType = {'email-address'}
            returnKeyType = {'next'}
            nextButtonAction = {() => this.onClickListner('keyboardDone')}
             ></TextField>

            <CommonButton callback = {this.myCallback}  title={'Forgot Password'} ></CommonButton>
            </SafeAreaView>
    )}
}

export default ForgotPassword;