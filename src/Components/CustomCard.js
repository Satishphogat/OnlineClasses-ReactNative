import React, {Component} from 'react'
import {View, StyleSheet, Image} from 'react-native';
import CustomColor from '../Utility/Constant.js';

const CustomCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {/* <Image source={require('')}></Image> */}
            </View>
        </View>
    )
}

export default CustomCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: CustomColor.lightGrayThemeColor, 
        height: 170, 
        flexDirection: 'row'
    },
    card: {
        backgroundColor: CustomColor.white, 
        flex: 0.7, 
        borderRadius: 5, 
        shadowColor: CustomColor.lightGray, 
        shadowOpacity: 1.0, 
        marginHorizontal: 16, 
        marginVertical: 5,
        shadowOffset: { width: 0, height: 0 },
    }
})