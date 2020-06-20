import React, { Component } from "react";
import { View, TouchableHighlight, Button,Text, Alert } from "react-native";

function CircularButton() {
    return(
        <TouchableHighlight style={{backgroundColor: 'red', flexDirection: 'row', alignItems: 'center', flex: 0.1, justifyContent: 'center', height: 50, margin: 10}}>
            <Text style={{color: 'white', fontSize: 18}}>click me</Text>
        </TouchableHighlight>
);
}

export default CircularButton;