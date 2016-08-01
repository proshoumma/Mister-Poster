/**
 * my post timeline
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'
import { getColor } from '../config'
import Post from './post'

export default class MyPosts extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileInfoContainer}>
          <View style={styles.profileNameContainer}>
            <Text style={styles.profileName}>
              Mister Poster
            </Text>
          </View>
          <View style={styles.profileCountsContainer}>
            <Text style={styles.profileCounts}>
              259
            </Text>
            <Text style={styles.countsName}>
              POSTS
            </Text>
          </View>
        </View>

        <ScrollView styles={styles.postContainer}>
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
