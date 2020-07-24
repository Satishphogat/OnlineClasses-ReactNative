import React, {Component} from 'react'
import { View, SafeAreaView, StyleSheet, Dimensions, Image, FlatList, Text } from 'react-native'
import Constants, { Images, Fonts } from '../../../Utility/Constant.js'

class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                 <View style = {styles.containerView}>
                     <Image source={Images.profile} style={{width: Dimensions.get('window').width, height: 200, resizeMode: 'contain'}}></Image>
                     <FlatList style={{top: 10, padding: 10}}
        data={[
          {key: 'Name ', value: 'Sagar Kumar'},
          {key: 'Roll No. ', value: '111213243123'},
          {key: 'Father Name', value: 'Abc'},
          {key: 'Mother Name', value: 'Abc'},
          {key: 'Date Of Birth', value: '01/01/1994'},
          {key: 'Class ', value: '10th'},
          {key: 'Address ', value: '10, Sushant Lok, Gurgaon'},
        ]}
        renderItem={({item}) => 
        <View style={styles.cellContainer}>
        <Text style={styles.key}>{item.key}:</Text>
        <Text style={styles.key}>{item.value}</Text>
        </View>
    }
      />
                
                </View> 
            </SafeAreaView>        
        )
    }
}

export default Profile;

var styles = StyleSheet.create({
    safeArea: {
        flex: 1, 
        justifyContent: 'center',
    },
    containerView: {
         flex: 1, 
         justifyContent: 'space-between'
    },
    key: {
        fontSize: Fonts.normal,
        width: Dimensions.get('window').width / 2
      },
      value: {
        fontSize: Fonts.normal,
        width: Dimensions.get('window').width / 2
      },
      cellContainer: {
        padding: 10,
        height: 70,
        flexDirection: 'row',
      },
})