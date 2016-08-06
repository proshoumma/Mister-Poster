/**
 * background component for adding image
 * to the background and fit the window size
 */

import React, { Component } from 'react'
import {
  Image,
  View,
  StyleSheet
} from 'react-native'

export default class Background extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.backgroundContainer}>
        <Image
        source={this.props.imgSrouce}
        style={styles.background}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundContainer : {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background : {
    flex: 1,
    height: null,
    width: null
  }
})
