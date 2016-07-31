/**
 * Home
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  StyleSheet
} from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import { getColor } from '../components/config'

import NavigationTab from '../components/home_screen/navTab'
import Timeline from '../components/home_screen/timeline'
import MyPosts from '../components/home_screen/myPosts'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
        backgroundColor={getColor('googleBlue700')}
        animated={true}
        />

        <ScrollableTabView
        initialPage={0}
        renderTabBar={() => <NavigationTab />}>

          <ScrollView tabLabel="ios-paper">
            <View style={styles.card}>
              <Text>News</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-people">
            <View style={styles.card}>
              <Text>Friends</Text>
            </View>
          </ScrollView>

        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  }
})
