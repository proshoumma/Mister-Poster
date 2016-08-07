/**
 * the universal timeline
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
import { connect } from 'react-redux'
import { savePosts } from '../../actions'
import { getColor } from '../config'
import { firebaseApp } from '../../firebase'
import Post from './post'

class Timeline extends Component {
  constructor(props) {
    super(props)

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    this.state = {
      isRefreshing: false,
      updateNotification: null
    }
  }

  componentDidMount() {
    firebaseApp.database().ref('posts/').once('value').then((snapshot) => {
      // this.setState({posts: snapshot.val()})
      this.props.savePosts(snapshot.val())
    }).catch(() => { })

    setTimeout(() => {
      this.setState({ updateNotification: 'Pull to refresh...' })
    }, 10000)
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  _onRefresh() {
    this.setState({ isRefreshing: true })

    firebaseApp.database().ref('posts/').once('value').then((snapshot) => {
      this.props.savePosts(snapshot.val())
      this.setState({isRefreshing: false, updateNotification: null})
    })
  }

  render() {
    const notify = this.state.updateNotification ?
    <Text style={styles.updateNotificationStyle}>
      {this.state.updateNotification}
    </Text>
    : null

    const view = this.props.posts ?
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

      {notify}

      {this.renderPosts()}

      </ScrollView>

    :
    <View style={styles.waitView}>
      <Text>Getting universal timeline...</Text>
    </View>

    return (
      <View style={styles.container}>
        {view}
      </View>
    )
  }

  renderPosts() {
    const postArray = []
    _.forEach(this.props.posts, (value, index) => {
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
  waitView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  updateNotificationStyle: {
    textAlign: 'center',
    marginTop: 10,
    paddingBottom: 5
  }
})

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {savePosts})(Timeline)
