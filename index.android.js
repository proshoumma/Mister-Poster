import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import App from './src/app'

class MisterPoster extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('MisterPoster', () => MisterPoster)
