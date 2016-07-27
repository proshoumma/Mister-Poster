/**
 * login screen
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Background from '../components/background'
import LogoCircle from '../components/logo_circle'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Background imgSrouce={require('../assets/images/cat-image-home-screen.jpg')}/>
        <View style={styles.logoContainer}>
          <LogoCircle />
        </View>
        <View style={styles.loginBoxContainer}>
          <Text style={styles.textLogo}>Mister Poster</Text>
          <TouchableOpacity>
            <View style={styles.loginBtn}>
              <Text style={styles.loginBtnTxt}>
                L O G   I N   W I T H   G O O G L E
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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
  },
  loginBoxContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  textLogo: {
    fontFamily: 'MagmaWave',
    fontSize: 30,
    color: 'rgba(255,255,255,.8)'
  },
  loginBtn: {
    height: 50,
    width: 260,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    elevation: 10
  },
  loginBtnTxt: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12
  }
})
