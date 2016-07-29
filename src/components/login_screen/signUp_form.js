/**
 * this is the sign in form of the login screen
 */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { getColor } from '../config'
import * as Animatable from 'react-native-animatable'

export default class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      init: true
    }
  }

  render() {
    const animation = this.state.init ? 'bounceInUp' : 'bounceOutDown'
    return (
      <Animatable.View
      animation={animation}
      style={styles.logoContainer}
      onAnimationEnd={this._handleAnimEnd.bind(this)}>
        <Text onPress={this._handleSignInPress.bind(this)}>Sign Up Form</Text>
      </Animatable.View>
    )
  }

  _handleSignInPress() {
    this.setState({ init: false })
  }

  _handleAnimEnd() {
    if (!this.state.init) {
      this.props.onBackFromSignUp()
    }
  }
}

const styles = StyleSheet.create({

})
