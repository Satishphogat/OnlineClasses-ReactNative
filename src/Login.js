import React, {Component  } from "react";
import { View, SafeAreaView, Touchable, TouchableOpacity, Text, StyleSheet } from "react-native";
import TextField from './TextField.js';
import HeaderView from "./HeaderView.js";
import CommonButton from "./CommonButton.js";


class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          id: '',
          password: '',
          isLoginValid: false
        };
      }

      onClickListner(type) {
        alert(type)
        switch(type) {
          case 'keyboardNext':
            console.log(type)
            break
          case 'keyboardDone':
              console.log(type)
              break
          case 'forgotPassword':

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

    render() {
        return (
        <SafeAreaView style={{flex: 1}}>

            <HeaderView></HeaderView>

            <TextField label = 'Email' 
            onChange={(text) => {
              this.setState({id: text.replace(/\s/g, '')})
            }} 
            value= {this.state.id}
            keyboardType = {'email-address'}
            returnKeyType = {'next'}
            nextButtonAction = {() => this.onClickListner('next')}
             ></TextField>

            <TextField label = 'Password' 
            onChange={(text) => {
              this.setState({password: text})
            }}
            value={this.state.password}
            ></TextField>

            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style = {styles.forgotPasswordText}>forgot password?</Text>
            </TouchableOpacity>

            <CommonButton title></CommonButton>
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
  }
})