import React,{Component  } from "react";
import { TextInput, View } from "react-native";

function TextField() {
    return(
        <TextInput style={{backgroundColor: 'yellow', margin: 20, height:50}}>
                    <View style={{backgroundColor: 'ligh-gray', height: 1, margin: 20}}></View>

        </TextInput>
    );
}

export default TextField;