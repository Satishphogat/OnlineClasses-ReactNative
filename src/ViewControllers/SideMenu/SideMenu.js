import React, { Component } from 'react'
import { View, SafeAreaView, Text, StyleSheet, Image } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Constant, { Images } from '../../Utility/Constant.js'
import SeparatorView from '../../Components/SeparatorView.js'
import renderSeparatorView from '../../Components/SeparatorView.js'

const Data = [
    {
        title: 'Home',
        image: Images.home
    },
    {
        title: 'Notifications',
        image: Images.notification
    },
    {
        title: 'Contact Us',
        image: Images.contactUs
    },
    {
        title: 'Logout',
        image: Images.logout
    },
]

export default class SideMenu extends Component {

    onPress = (item) => {
        alert(item.title);
    }

    renderSeparatorView = () => {
        return (
            <View style={{
                height: 1,
                width: '90%',
                backgroundColor: CustomColor.lightGray,
                alignSelf: 'center'
            }}
            />
        )
    };

    headerView = () => {
        return (
            <View style={style.headerContainerView}>
                <Image style = {style.profileImage} source={Images.profile}></Image>
                <Text style = {style.profileText}>Sagar Kumar</Text>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <FlatList
                        data={Data}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={style.cellContainer} onPress={() => this.onPress(item)}>
                                <Image style={style.cellIcon} source={item.image}></Image>
                                <Text style={style.text}>{item.title}</Text>
                            </TouchableOpacity>
                        }
                        ItemSeparatorComponent={this.renderSeparatorView}
                        ListHeaderComponent={this.headerView}
                        stickyHeaderIndices={[0]}
                    ></FlatList>
                </View>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    headerContainerView: {
        height: 200,
         flex: 1, 
         alignItems: 'center',
         justifyContent: 'space-evenly'
    },
    profileImage: {
        width: 130, 
        height: 130, 
        borderRadius: 65, 
        top: 10, 
        alignSelf: 'center'
    },
    flatList: {
        padding: 20,
    },
    cellContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    cellIcon: {
         width: 30, height: 30 
    },
    text: {
        fontSize: 20,
        paddingLeft: 30,
    },
    profileText: {
        fontSize: 20
    }
})