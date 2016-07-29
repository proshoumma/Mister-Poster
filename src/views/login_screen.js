/**
 * login screen
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { getColor } from '../components/config'

import Background from '../components/background'
import LogoCircle from '../components/login_screen/logo_circle'
import InitialView from '../components/login_screen/initial_view'
import SignInForm from '../components/login_screen/signIn_form'
import SignUpForm from '../components/login_screen/signUp_form'

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
      initial: true,
      signIn: false,
      signUp: false,
      animationDelay: 500
    }
  }

  render() {
    const initialView = this.state.initial ?
      <InitialView
      onSignIn={this._onSignIn.bind(this)}
      onSignUp={this._onSignUp.bind(this)}
      animDelay={this.state.animationDelay}/>
    : null

    const signIn = this.state.signIn ?
      <SignInForm
      onBackFromSignIn={this._onBackFromSignIn.bind(this)} />
    : null

    const signUp = this.state.signUp ?
      <SignUpForm
      onBackFromSignUp={this._onBackFromSignUp.bind(this)} />
    : null

    return (
      <View style={styles.container}>
        <Background imgSrouce={require('../assets/images/cat-image-home-screen.jpg')}/>

        <Animatable.View
        animation="bounceInDown"
        style={styles.logoContainer}
        delay={this.state.animationDelay}>
          <LogoCircle />
        </Animatable.View>

        { initialView }
        { signIn }
        { signUp }

      </View>
    )
  }

  _onSignIn() {
    this.setState({
      initial: false,
      signIn: true
    })
  }

  _onBackFromSignIn() {
    this.setState({
      initial: true,
      signIn: false
    })
  }

  _onSignUp() {
    this.setState({
      initial: false,
      signUp: true
    })
  }

  _onBackFromSignUp() {
    this.setState({
      initial: true,
      signUp: false
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
