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
      view: 'initial' // can be 'signIn' / 'signUp'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Background imgSrouce={require('../assets/images/cat-image-home-screen.jpg')}/>
        <Animatable.View animation="bounceInDown" style={styles.logoContainer} delay={500}>
          <LogoCircle />
        </Animatable.View>
      </View>
    )
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
