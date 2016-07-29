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
import * as Animatable from 'react-native-animatable'

export default class InitialView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      init: true,
      signInPressed: false,
      signUpPressed: false
    }
  }

  render() {
    const animation = this.state.init ? 'bounceInUp' : 'bounceOutDown'
    return (
      <Animatable.View
      animation={animation}
      style={styles.logoContainer}
      delay={this.props.animDelay}
      onAnimationEnd={this._handleAnimEnd.bind(this)}>
        <Text onPress={this._handleSignInPress.bind(this)}>Sign In</Text>
        <Text onPress={this._handleSignUpPress.bind(this)}>Sign Up</Text>
      </Animatable.View>
    )
  }

  _handleSignInPress() {
    this.setState({ init: false, signInPressed: true })
  }

  _handleSignUpPress() {
    this.setState({ init: false, signUpPressed: true })
  }

  _handleAnimEnd() {
    if (!this.state.init) {
      if (this.state.signInPressed) {
        this.props.onSignIn()
      }
      if (this.state.signUpPressed) {
        this.props.onSignUp()
      }
    }
  }
}

const styles = StyleSheet.create({

})
