import React, {Component  } from "react";
import { View, SafeAreaView } from "react-native";
import TextField from './TextField.js';


class Login extends Component {
    render() {
        return (
        <SafeAreaView style={{flex: 1}}>
            <TextField></TextField>
        </SafeAreaView>
        )
    }
}

export default Login;