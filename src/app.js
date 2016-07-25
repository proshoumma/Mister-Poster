import React, { Component } from 'react'
import {
  Text,
  View,
  AppRegistry
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import * as storage from 'redux-storage'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>
          Hello World, it is awesome!!!
        </Text>
      </View>
    )
  }
}
