/**
 * create new tab
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { getColor } from '../config'

export default class CreateNew extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {'Create a new Post'.toUpperCase()}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
          multiline={true}
          style={styles.inputField}
          underlineColorAndroid='transparent'
          placeholder='Your post...'
          placeholderTextColor='rgba(0,0,0,.6)'
          />
        </View>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>POST</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    color: getColor()
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(255,255,255,.6)',
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 2,
  },
  inputField: {
    flex: 1,
    padding: 0,
    textAlignVertical: 'top'
  },
  btnContainer: {
    width: 120,
    height: 40,
    backgroundColor: getColor(),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  btnText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: getColor('#ffffff')
  }
})
