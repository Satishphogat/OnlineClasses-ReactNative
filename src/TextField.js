import React,{Component  } from "react";
import { TextInput, View, StyleSheet } from "react-native";

const TextField = ({label, onChange, value, keyboardType, returnKeyType, nextButtonAction, secureTextEntry}) => {
    return(
        <TextInput 
        placeholder = {label} 
        onChangeText={onChange} 
        placeholderTextColor='gray' 
        value={value} 
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        onSubmitEditing={nextButtonAction}
        secureTextEntry={secureTextEntry}
        style={styles.textField1}>
        </TextInput>
    );
}

export default TextField;

const styles = StyleSheet.create({
    textField1: {
        margin: 20, 
        height:50,
        fontSize: 25, 
        fontWeight: '200', 
        borderBottomColor: 'gray', 
        color: 'black', 
        borderBottomWidth: 1,
        fontSize: 18,
        fontWeight: '500'
    }
});