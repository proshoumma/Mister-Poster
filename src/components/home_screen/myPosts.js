/**
 * my post timeline
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { getColor } from '../config'
import _ from 'lodash'
import moment from 'moment'
import Post from './post'
import { firebaseApp } from '../../firebase'

class MyPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: {},
      postsCount: 0
    }
  }

  componentDidMount() {
    const userUid = this.props.currentUser.uid

    firebaseApp.database().ref('/users/' + userUid + '/posts/').on('value', (snapshot) => {
      this.setState({posts: snapshot.val(), postsCount: _.size(snapshot.val())})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileInfoContainer}>
          <View style={styles.profileNameContainer}>
            <Text style={styles.profileName}>
              {this.props.currentUser.name}
            </Text>
          </View>
          <View style={styles.profileCountsContainer}>
            <Text style={styles.profileCounts}>
              {this.state.postsCount}
            </Text>
            <Text style={styles.countsName}>
              POSTS
            </Text>
          </View>
        </View>

        <ScrollView styles={styles.postContainer}>
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
        <TouchableOpacity
        onLongPress={this._handleDelete.bind(this, value.puid)}
        key={index}
        >
          <Post
          posterName={value.name}
          postTime={timeString}
          postContent={value.text}
          />
        </TouchableOpacity>
      )
    })
    _.reverse(postArray)
    return postArray
  }

  _handleDelete(puid) {
    Alert.alert(
      'Delete Post',
      'Are you sure to delete the post?',
      [
        {text: 'Yes', onPress: () => this._deleteConfirmed(puid) },
        {text: 'No'}
      ]
    )
  }

  _deleteConfirmed(puid) {
    firebaseApp.database().ref('/posts/' + puid).remove()
    firebaseApp.database().ref('/users/' + this.props.currentUser.uid + '/posts/' + puid).remove()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileInfoContainer: {
    flexDirection: 'row',
    height: 65,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 2,
    backgroundColor: getColor()
  },
  profileNameContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  profileName: {
    marginLeft: 20,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'MagmaWave'
  },
  profileCountsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5
  },
  profileCounts: {
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    color: '#ffffff'
  },
  countsName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: '#ffffff'
  }
})

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}
export default connect(mapStateToProps)(MyPosts)
