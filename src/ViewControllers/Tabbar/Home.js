
import React, { Component } from 'react';
import { SectionList, View, StyleSheet, Text, SafeAreaView, Dimensions, Image, TouchableHighlight, FlatList } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomColor, { Images } from '../../Utility/Constant.js';//'../../Utility/Constant.js';
import Cards from '../../Components/Cards.js';
import { WebView } from "react-native-webview";
import liveClass from './WebView/LiveClass.js'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Constant from '../../Utility/Constant.js'
import ClassDetail from './ClassDetail/ClassDetail.js'

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

class Home extends Component {
  onPressLiveImage = () => {
    this.props.navigation.navigate('LiveClass')
    // this.props.navigation.navigate('ClassDetail')
  }

  liveClassView = () => {
  return <View style={styles.liveClass} >
      <WebView source={{ uri: 'https://www.youtube.com' }} style={{flex: 1, justifyContent: 'center', height: 270}}    />
      
      <View style={{ height: 270, backgroundColor: 'clear', position: 'absolute', justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={this.onPressLiveImage} style={{backgroundColor: 'clear', height: 270, width: Dimensions.get('window').width, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={Images.play} style = {{width: 80, height: 80}} />
      </TouchableOpacity>
      </View>

      <View style={{ height: 60, backgroundColor: 'clear', position: 'absolute', paddingRight: 10}}>
      <TouchableOpacity onPress={this.onPressLiveImage} style = {{width: 70, height: 40, backgroundColor: 'red', margin: 0, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <Text style={{color: 'white', fontSize: 22}}>LIVE</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  };

  static navigationOptions = {
    title: 'Home',
  };

  onPressClassDetail = () => {
    this.props.navigation.navigate('ClassDetail')
  }

  render() {
    return (
      <SafeAreaView>

        <SectionList
        style = {{top: 0}}
          sections={[
            { title: 'Upcomming classes', data: ['ALTERED'] },
            { title: 'Recent classes', data: ['BEST MEN'] },
          ]} 
          onPress={() => alert('success')}
          renderItem={({ item }) => 
          <Cards onPress={this.onPressClassDetail}>
          </Cards>
        }
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          ListHeaderComponent={this.liveClassView}
          stickyHeaderIndices={[0]}
          // keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  liveClass: {
    height: 270,
    width: '100%',
    backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center'
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
  title: {
    fontSize: 32,
  }
})
