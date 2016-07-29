/**
 * this is the sign in form of the login screen
 */

import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  BackAndroid,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { getColor } from '../config'
import * as Animatable from 'react-native-animatable'

export default class SignInForm extends Component {
  constructor(props) {
    super(props)

    this._handleBackBtnPress = this._handleBackBtnPress.bind(this)

    this.state = {
      init: true
    }
  }

  componentDidMount() {
    BackAndroid.addEventListener('backBtnPressed', this._handleBackBtnPress)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('backBtnPressed', this._handleBackBtnPress)
  }

  render() {
    const animation = this.state.init ? 'bounceInUp' : 'bounceOutDown'
    return (
      <Animatable.View
      animation={animation}
      style={styles.container}
      onAnimationEnd={this._handleAnimEnd.bind(this)}>
        <Text style={styles.title}>Sign In</Text>
        <View style={[styles.inputContainer, { marginBottom: 10 }]}>
          <TextInput
          style={styles.inputField}
          underlineColorAndroid='transparent'
          placeholder='Username'
          placeholderTextColor='rgba(255,255,255,.6)'
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.inputField}
          underlineColorAndroid='transparent'
          placeholder='Password'
          secureTextEntry={true}
          placeholderTextColor='rgba(255,255,255,.6)'
          />
        </View>
        <TouchableOpacity onPress={this._handleGoBack.bind(this)}>
          <View style={styles.submitBtnContainer}>
            <Text style={styles.submitBtn}>{'Let\'s Go'.toUpperCase()}</Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    )
  }

  _handleGoBack() {
    this.setState({ init: false })
  }

  _handleBackBtnPress() {
    this._handleGoBack()
    return true
  }

  _handleAnimEnd() {
    if (!this.state.init) {
      this.props.onBackFromSignIn()
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20
  },
  title: {
    fontSize: 25,
    fontFamily: 'MagmaWave',
    marginBottom: 20,
    color: 'rgba(255,255,255,.8)'
  },
  inputContainer: {
    backgroundColor: 'rgba(255,255,255,.3)',
    borderRadius: 5
  },
  inputField: {
    width: 280,
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: 'Roboto-Bold',
    color: '#ffffff'
  },
  submitBtnContainer: {
    marginTop: 20,
    width: 120,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtn: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: getColor()
  }
})
