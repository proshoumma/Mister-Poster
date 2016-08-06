/**
 * this is the main application component
 * it is used to configure the navigator
 * and lock to screen to portrait mode only
 * this will also determine what screen to show
 * according to the signed in status of the user
 */

import React, { Component } from 'react'
import {
  Navigator
} from 'react-native'
import { connect } from 'react-redux'

// import the login screen view and
// add it as the first component to render
// added HomeScreen to debug
import LoginScreen from './views/login_screen'
import HomeScreen from './views/home_screen'

class App extends Component {
  constructor(props) {
    super(props)

    // base route stack to render
    // based of signed status of the user
    if (this.props.currentUser.signInStatus) {
      this.routes = [
        { view: HomeScreen }
      ]
    } else {
      this.routes = [
        { view: LoginScreen }
      ]
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRouteStack={this.routes}
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

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(App)
