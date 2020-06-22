import React, {Component} from 'react'
import View from 'react-native'
import { exp } from 'react-native-reanimated';
import Constant from '../Utility/Constant.js'

const renderSeparatorView = () => {
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

  export default renderSeparatorView;