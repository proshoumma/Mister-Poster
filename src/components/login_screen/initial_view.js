/**
 * this is the initial view of the login screen
 * it will show the buttons "sign in" and "sign up"
 */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { getColor } from '../config'

export default class LogoCircle extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Text>Hello World</Text>
    )
  }
}

const styles = StyleSheet.create({

})
