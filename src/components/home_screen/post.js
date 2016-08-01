/**
 * individual post component
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import { getColor } from '../config'

export default class Posts extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>
          {this.props.posterName}
        </Text>
        <Text style={styles.time}>
          {this.props.postTime}
        </Text>
        <Text style={styles.content}>
          {this.props.postContent}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 2,
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
  },
  name: {
    color: getColor(),
    fontFamily: 'Roboto-Bold',
    fontSize: 15
  },
  time: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    paddingBottom: 10
  },
  content: {
    color: 'rgba(0,0,0,.8)',
    fontFamily: 'Roboto-Regular',
    fontSize: 14
  }
})
