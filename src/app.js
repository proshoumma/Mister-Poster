/**
 * this is the main application component
 * it is used to configure the navigator
 * and lock to screen to portrait mode only
 * this will also determine what screen to show
 * according to the signed in status of the user
 */

import React, { Component } from 'react'
import {
  Navigator,
  View
} from 'react-native'
import { connect } from 'react-redux'

// import the login screen view and
// add it as the first component to render
// added HomeScreen to debug
import LoginScreen from './views/login_screen'
import HomeScreen from './views/home_screen'

// import firebase to determine which view to display
import { firebaseApp } from './firebase'

class App extends Component {
  constructor(props) {
    super(props)

    this.routes = [
      { view: LoginScreen },
      { view: HomeScreen }
    ]
  }

  render() {
    // base route stack to render
    // based on signed status of the user
    let navigator
    if (this.props.currentUser.signInStatus) {
      navigator =
        <Navigator
          style={{ flex: 1 }}
          initialRoute={this.routes[1]}
          initialRouteStack={this.routes}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
    } else {
      navigator =
        <Navigator
          style={{ flex: 1 }}
          initialRoute={this.routes[0]}
          initialRouteStack={this.routes}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
    }

    return (
      <View style={{flex: 1}}>
        {navigator}
      </View>
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
