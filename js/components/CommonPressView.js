/**
 * Created by drmk on 2017/6/28.
 */
'use strict';
import React, { PropTypes } from 'react'
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native'

export default class CommonPressView extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
  }

  render() {
    return (
      Platform.OS === 'ios' ?
        <TouchableOpacity
          {...this.props}
          onPress={this.props.onPress}
        />
        :
        <TouchableNativeFeedback
          {...this.props}
          onPress={this.props.onPress}
        />
    )
  }
}