import React, { Component } from "react";
import { View, Touchable } from "react-native";

function CircularButton() {
    return(
        <Touchable style={{height:100, width: 100}}>Click me</Touchable>
    );
}

export default CircularButton;