
import React, { Component } from 'react';
import { SectionList, View, StyleSheet, Text, SafeAreaView, Image, TouchableHighlight, FlatList } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomColor from '../../Utility/Constant.js';//'../../Utility/Constant.js';
import CustomCard from '../../Components/CustomCard.js';

const sectionData = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];

//   const DATA = [
//     {
//       title: 'First Item',
//     },
//     {
//       title: 'Second Item',
//     },
//     {
//       title: 'Third Item',
//     },
//   ];
  
  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

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

                <SectionList sections={sectionData}
                    renderItem={({ item }) => 
                     <CustomCard></CustomCard>}></SectionList>
                     {/* <FlatList
                //       data={sectionData}
                //       horizontal={true}
                //       renderItem={({ item }) => <Item title={item.data} />}
                //     />
                // }
                //      renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                //      ListHeaderComponent={this.liveClassView}
                // >
                // </SectionList> */}
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
    // item: {
    //     padding: 10,
    //     fontSize: 18,
    //     height: 44,

    // },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 100,
      },
      title: {
        fontSize: 32,
      },
})
