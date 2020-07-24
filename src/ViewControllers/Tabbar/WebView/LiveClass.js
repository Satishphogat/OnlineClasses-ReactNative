import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { WebView } from "react-native-webview";

class LiveClass extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
                 <View style = {{backgroundColor: 'green', flex: 1, width: '100%', height: '100%'}}>
                 <WebView source={{ uri: 'https://www.youtube.com/watch?v=dBE2eZjf7Rw' }} style={{width: '100%', height: '100%'}} />
                </View> 
            </SafeAreaView>
        )
    }
}

export default LiveClass;