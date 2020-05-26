import React, {Component} from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

class CommonButton extends Component {
    render() {
        return (
            <TouchableOpacity style = {styles.yellowButton}>
                <Text style = {styles.loginText}>Login</Text>
            </TouchableOpacity>
        )
    }
}

export default CommonButton;

const styles = StyleSheet.create ({
    yellowButton : {
        margin: 20, 
        backgroundColor: '#FFD243', 
        borderRadius: 5, 
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginText: {
        color: 'white',
        fontSize: 18, 
        fontWeight: 'bold'
    }
})