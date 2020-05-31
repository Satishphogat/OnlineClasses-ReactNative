import React, { Component } from 'react';
import { SectionList, View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import Constant from '../Utility/Constant.js'

class Home extends Component {

    liveClassView = () => {
        return <View style={styles.liveClass} >
            {/* <Image source={LocalImages.liveImage} /> */}
            <Text style = {{color: 'white', fontSize: 24, fontWeight: '800'}}>LIVE CLASSES</Text>
        </View>
      };

    render() {
        return (
            <SafeAreaView>

                <SectionList sections={[
                    { title: 'Upcomming Classes', data: ['Success'] },
                    { title: 'Recent Classes', data: ['Success'] },
                ]}
                    renderItem={({ item }) => <Text style={styles.liveClass}>{item.section}</Text>}
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
        fontSize: 18,
        fontWeight: '600',
        backgroundColor: 'rgba(247,247,247,1.0)',
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
