/**
 * login screen
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StatusBar,
  StyleSheet
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { getColor } from '../components/config'

import Background from '../components/background'
import LogoCircle from '../components/login_screen/logo_circle'
import InitialView from '../components/login_screen/initial_view'
import SignInForm from '../components/login_screen/signIn_form'
import SignUpForm from '../components/login_screen/signUp_form'
import ForgotPassForm from '../components/login_screen/forgotPassword_form'

// import and configure firebase
// import * as firebase from 'firebase';
// const firebaseConfig = {
//   apiKey: 'AIzaSyAOO0YkWPvCyTSk_jEUUlPFBDNG1G2_z6M',
//   authDomain: 'mister-poster.firebaseapp.com',
//   databaseURL: 'https://mister-poster.firebaseio.com',
//   storageBucket: 'mister-poster.appspot.com',
// }
// const firebaseApp = firebase.initializeApp(firebaseConfig)


export default class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialRun: true,
      initialScreen: true,
      signIn: false,
      signUp: false,
      forgotPass: false
    }

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  componentDidMount() {
    this.setState({initialRun: false})
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  render() {
    const animationDelay = this.state.initialRun ? 500 : 0

    const initialView = this.state.initialScreen ?
      <InitialView
      onSignIn={this._onSignIn.bind(this)}
      onSignUp={this._onSignUp.bind(this)}
      animDelay={animationDelay}/>
    : null

    const signIn = this.state.signIn ?
      <SignInForm
      onBackFromSignIn={this._onBackFromSignIn.bind(this)}
      onForgotPass = {this._onForgotPass.bind(this)} />
    : null

    const signUp = this.state.signUp ?
      <SignUpForm
      onBackFromSignUp={this._onBackFromSignUp.bind(this)} />
    : null

    const fogotPass = this.state.forgotPass ?
      <ForgotPassForm
      onBackFromForgotPass={this._onBackFromForgotPass.bind(this)} />
    : null

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={getColor('googleBlue700')}
          animated={true}
        />

        <Background imgSrouce={require('../assets/images/cat-image-home-screen.jpg')}/>

        <Animatable.View
        animation="bounceInDown"
        style={styles.logoContainer}
        delay={animationDelay}>
          <LogoCircle />
        </Animatable.View>

        { initialView }
        { signIn }
        { signUp }
        { fogotPass }

      </View>
    )
  }

  _onSignIn() {
    this.setState({
      initialScreen: false,
      signIn: true
    })
  }

  _onBackFromSignIn() {
    this.setState({
      initialScreen: true,
      signIn: false
    })
  }

  _onSignUp() {
    this.setState({
      initialScreen: false,
      signUp: true
    })
  }

  _onBackFromSignUp() {
    this.setState({
      initialScreen: true,
      signUp: false
    })
  }

  _onForgotPass() {
    this.setState({
      initialScreen: false,
      signIn: false,
      signUp: false,
      forgotPass: true
    })
  }

  _onBackFromForgotPass() {
    this.setState({
      initialScreen: true,
      forgotPass: false
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
