import React, {Component} from 'react'
import { View, SafeAreaView, StyleSheet, Dimensions, Image, FlatList, Text } from 'react-native'
import Constants, { Images, Fonts } from '../../../Utility/Constant.js'

class ClassDetail extends Component {
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                 <View style = {styles.containerView}>
                     <Image source={Images.math} style={{width: Dimensions.get('window').width, height: 200}}></Image>
                     <FlatList
        data={[
          {key: 'Subject', value: 'Math'},
          {key: 'Teacher', value: 'Abc'},
          {key: 'Start Time', value: '4 hours'},
          {key: 'Remaining Time', value: '1 hours'},
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

export default ClassDetail;

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