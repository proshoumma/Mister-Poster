/**
 * this is the main application component
 * it is used to configure the navigator
 */

import React, { Component } from 'react'
import {
  Navigator
} from 'react-native'

// import the login screen container
// to add it as the first component to render
import LoginScreen from './containers/login_screen'

// base route stack to render
const routes = [
  { view: LoginScreen }
]

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRouteStack={routes}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    )
  }

  renderScene(route, navigator) {
    return <route.view navigator={navigator} {...route}/>
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.FloatFromRight
  }
}
