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
import * as Animatable from 'react-native-animatable'
import { getColor } from '../components/config'

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
        <Animatable.View animation="bounceInDown" style={styles.logoContainer} delay={500}>
          <LogoCircle />
        </Animatable.View>
        <Animatable.View animation="bounceInUp" style={styles.loginBoxContainer} delay={500}>
          <Text style={styles.textLogo}>Mister Poster</Text>
          <TouchableOpacity>
            <View style={styles.loginBtn}>
              <Text style={styles.loginBtnTxt}>
                L O G   I N   W I T H   G O O G L E
              </Text>
            </View>
          </TouchableOpacity>
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
    fontSize: 12,
    color: getColor()
  }
})
