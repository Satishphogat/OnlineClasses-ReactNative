import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constant from '../Utility/Constant.js'

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Third Item',
  },
];

class Cards extends Component {

  render() {
    return (
      <FlatList 
      style={{height: 200}}
      data = {DATA}
      horizontal={true}
      renderItem={({item}) => 
      <Text style={styles.card}>{item.title}</Text>
    }></FlatList>
    )}}

    export default Cards;


const styles = StyleSheet.create({
  card: {
    backgroundColor: CustomColor.lightGrayThemeColor,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    width: 300,
    borderRadius: 5,
    overflow: 'hidden'
  },
  title: {
    fontSize: 32,
  },
});

































// import React, {Component} from 'react'
// import {View, StyleSheet, Image, FlatList, Text} from 'react-native';
// import CustomColor from '../Utility/Constant.js';

// const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//     },
//   ];

//   function Item({ title }) {
//     return (
//       <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//       </View>
//     );
//   }
  
// const CustomCard = () => {
//     return (
//         <View style={styles.container}>
//             <FlatList
//             style={{backgroundColor: 'green', flex: 1}}
//             data={DATA}
//             renderItem={({ item }) => <Item title={item.title} />}
//             keyExtractor={item => item.id}>

//             </FlatList>
//         </View>
//     )
// }

// export default CustomCard;

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: CustomColor.lightGrayThemeColor, 
//         height: 60, 
//         flexDirection: 'row'
//     },
//     item: {
//         backgroundColor: '#f9c2ff',
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//       },
//     card: {
//         backgroundColor: CustomColor.white, 
//         flex: 0.7, 
//         borderRadius: 5, 
//         shadowColor: CustomColor.lightGray, 
//         shadowOpacity: 1.0, 
//         marginHorizontal: 16, 
//         marginVertical: 5,
//         shadowOffset: { width: 0, height: 0 },
//     },
//     title: {
//         fontSize: 32,
//       },
// })