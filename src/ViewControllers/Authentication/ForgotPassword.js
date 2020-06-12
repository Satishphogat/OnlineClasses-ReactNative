import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import { PropTypes } from 'react'

import HeaderView from '../../Components/HeaderView.js';//'../../Components/HeaderView.js';
import TextField from '../../Components/TextField.js';
import CommonButton from '../../Components/CommonButton';

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