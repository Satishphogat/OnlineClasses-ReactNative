import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'

class LiveClass extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style = {{backgroundColor: 'green', flex: 1}}></View>
            </SafeAreaView>
        )
    }
}

export default LiveClass;