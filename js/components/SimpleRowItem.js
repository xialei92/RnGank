/**
 * Created by drmk on 2017/6/26.
 */
'use strict';
import React, { PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import CommonPressView from './CommonPressView'
import { connect } from 'react-redux'

class SimpleRowItem extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    renderSeparator: PropTypes.bool,
    isShowRightIcon: PropTypes.bool,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    renderSeparator: true,
    isShowRightIcon: true,
    iconColor: 'black'
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { title, icon, renderSeparator, iconColor, isShowRightIcon, titleColor, separatorColor, arrowColor } = this.props;
    return (
      <CommonPressView onPress={this.props.onPress}>
        <View style={{ height: 40 }}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={style.introLeft}>
              <Icon name={icon} color={iconColor} size={20}/>
            </View>
            <View style={style.introRight}>
              <Text style={[style.text, { color: titleColor }]}>{title}</Text>
              {isShowRightIcon ?
                <Icon name='ios-arrow-forward' color={arrowColor} size={15}/>
                : null
              }
            </View>
          </View>
          {
            renderSeparator ?
              <View style={[style.separator, { backgroundColor: separatorColor }]}/>
              :
              null
          }
        </View>
      </CommonPressView>
    )
  }
}

const style = StyleSheet.create({
  introLeft: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  introRight: {
    flex: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10
  },
  text: {
    fontSize: 14,
    color: '#333333',
  },
  separator: {
    backgroundColor: '#e5e5e5',
    height: 0.5,
    marginHorizontal: 10,
  }
})

const mapStateToProps = (state) => {
  return {
    titleColor: state.settingState.colorScheme.titleColor,
    separatorColor: state.settingState.colorScheme.separatorColor,
    arrowColor: state.settingState.colorScheme.titleColor,
  }
}

export default connect(mapStateToProps)(SimpleRowItem)