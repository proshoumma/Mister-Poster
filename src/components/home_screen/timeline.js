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
  LayoutAnimation,
  Platform,
  UIManager,
  RefreshControl
} from 'react-native'
import _ from 'lodash'
import moment from 'moment'
import { getColor } from '../config'
import { firebaseApp } from '../../firebase'
import Post from './post'

export default class Timeline extends Component {
  constructor(props) {
    super(props)

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    this.state = {
      isRefreshing: false,
      posts: null
    }
  }

  componentDidMount() {
    firebaseApp.database().ref('posts/').once('value').then((snapshot) => {
      this.setState({posts: snapshot.val()})
    })
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  _onRefresh() {
    this.setState({ isRefreshing: true })

    firebaseApp.database().ref('posts/').once('value').then((snapshot) => {
      this.setState({posts: snapshot.val(), isRefreshing: false})
    })
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

        {this.renderPosts()}

        </ScrollView>
      </View>
    )
  }

  renderPosts() {
    const postArray = []
    _.forEach(this.state.posts, (value, index) => {
      const time = value.time
      const timeString = moment(time).fromNow()
      postArray.push(
        <Post
        posterName={value.name}
        postTime={timeString}
        postContent={value.text}
        key={index}
        />
      )
    })
    _.reverse(postArray)
    return postArray
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
