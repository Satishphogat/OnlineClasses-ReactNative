import React, {Component  } from "react";
import { View, Text, StyleSheet } from "react-native";

const HeaderView = ({title}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default HeaderView;

const styles = StyleSheet.create({
    container: {
    height: 200,
    width: '100%',
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'center'
    },
    text: {
        fontSize: 30, 
        fontWeight: 'bold'
    }
})