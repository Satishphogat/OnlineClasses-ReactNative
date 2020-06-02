import React, { Component } from 'react';
import { SectionList, View, StyleSheet, Text, SafeAreaView, Image, TouchableHighlight } from 'react-native';
import Constant from '../Utility/Constant.js'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomColor from '../Utility/Constant.js';
import CustomCard from '../Components/CustomCard.js'

class Home extends Component {

    onPressLiveImage = () =>{
        alert('success')
    }

    liveClassView = () => {
        return <View style={styles.liveClass} >
            {/* <Image source={LocalImages.liveImage} /> */}
            <TouchableHighlight onPress={this.onPressLiveImage}>
                <Text style = {{color: CustomColor.white, fontSize: 24, fontWeight: '800'}}>LIVE CLASSES
                </Text>
            </TouchableHighlight>
        </View>
      };

    render() {
        return (
            <SafeAreaView>

                <SectionList sections={[
                    { title: 'Upcomming Classes', data: ['Success'] },
                    { title: 'Recent Classes', data: ['Success'] },
                ]}
                    renderItem={({ item }) => 
                    <CustomCard></CustomCard>}

                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                    ListHeaderComponent={this.liveClassView}
                    stickyHeaderIndices={[0]}
                >

                </SectionList>
            </SafeAreaView>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    liveClass: {
        height: 270,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems:'center'
    },
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        padding: 10,
        paddingHorizontal: 16,
        fontSize: 18,
        fontWeight: '600',
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: CustomColor.lightGrayThemeColor
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,

    },

})
