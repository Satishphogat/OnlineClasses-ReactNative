import React, {Component} from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

class CommonButton extends Component {

    onPressBtn = () => {
         //this.props.callBack();
    };

    render() {
        return (
            <TouchableOpacity style = {styles.yellowButton} onPress = {this.onPressBtn()} >
                <Text style = {styles.loginText}>{this.props.title}</Text>
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