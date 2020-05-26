import React, {Component  } from "react";
import { View, Text } from "react-native";

function HeaderView() {
    return(
        <View style={{height: 200, width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Log in</Text>
        </View>
    )
}

export default HeaderView;