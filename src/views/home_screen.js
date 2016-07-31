/**
 * Home screen
 * ScrollableTabView is used for different screens
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
import Icon from 'react-native-vector-icons/Ionicons'
import { getColor } from '../components/config'

import NavigationTab from '../components/home_screen/navTab'
import Timeline from '../components/home_screen/timeline'
import CreateNew from '../components/home_screen/createNew'
import MyPosts from '../components/home_screen/myPosts'
import Settings from '../components/home_screen/settings'

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
          <Timeline tabLabel="md-pulse"/>
          <CreateNew tabLabel="md-create"/>
          <MyPosts tabLabel="md-contact"/>
          <Settings tabLabel="ios-settings"/>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
