import React, {Component} from 'react'
import { View } from "react-native";
import HeaderImage from "./HeaderImage"
import Button from './CircularButton'
import CircularButton from './CircularButton';

class Parent extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'light-gray', flex: 1}}>
                {/* <HeaderImage></HeaderImage> */}
                <CircularButton style = {{flex: 1}} title="click me"></CircularButton>
            </View>
        )
    }
}

export default Parent