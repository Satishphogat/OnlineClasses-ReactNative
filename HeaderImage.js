import React, { Component } from "react";
import { View, Image } from "react-native";

function HeaderImage() {
    return(
        <View style={{backgroundColor: 'green', height: 200, flexDirection: "column"}}>
                     <Image source={require('./Images/firstImage.png')} style={{ height: 200}}></Image>
        </View>
    )
}

export default HeaderImage