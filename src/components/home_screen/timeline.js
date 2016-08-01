/**
 * the universal timeline
 * it's a redux container
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  RefreshControl
} from 'react-native'
import { getColor } from '../config'
import Post from './post'

export default class Timeline extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isRefreshing: false
    }
  }

  _onRefresh() {
    this.setState({ isRefreshing: true })

    setTimeout(()=>{
      this.setState({isRefreshing: false})
    }, 3000)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="#00ff00"
            colors={[getColor()]}
            progressBackgroundColor={getColor('#ffffff')}
          />
        }>

        <Post
        posterName={'Mister Poster'}
        postTime={'Posted an hour ago'}
        postContent={'This is a Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        />
        <Post
        posterName={'Mister Poster'}
        postTime={'Posted an hour ago'}
        postContent={'This is a Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        />
        <Post
        posterName={'Mister Poster'}
        postTime={'Posted an hour ago'}
        postContent={'This is a Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        />

        </ScrollView>
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
