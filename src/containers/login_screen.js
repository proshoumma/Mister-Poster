/**
 * login screen
 */

import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import HomeScreen from './home_screen'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>
          Login Screen!
        </Text>
      </View>
    )
  }

}
