import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Parent from './Parent.js';
import Login from './src/Login.js';
import ForgotPassword from './src/ForgotPassword.js';

export default class App extends Component {
  render() {
    return (
      // <Login></Login>
      <ForgotPassword></ForgotPassword>
    )
  }
}
