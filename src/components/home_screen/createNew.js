/**
 * create new tab
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { getColor } from '../config'
import { firebaseApp } from '../../firebase'

export default class CreateNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postText: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {'Create a new Post'.toUpperCase()}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
          multiline={true}
          style={styles.inputField}
          underlineColorAndroid='transparent'
          placeholder='Your post...'
          value={this.state.postText}
          onChangeText={(text) => this.setState({ postText: text })}
          placeholderTextColor='rgba(0,0,0,.6)'
          />
        </View>
        <TouchableOpacity style={styles.btnContainer} onPress={this._handleNewPost.bind(this)}>
          <Text style={styles.btnText}>POST</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _handleNewPost() {
    const time = Date.now()
    const uid = firebaseApp.auth().currentUser.uid;
    const email = firebaseApp.auth().currentUser.email;
    firebaseApp.database().ref('users/' + uid + '/posts/').push({
      puid: email + '-' + time,
      time: time,
      name: firebaseApp.auth().currentUser.displayName,
      text: this.state.postText
    })
    firebaseApp.database().ref('/posts/').push({
      puid: email + '-' + time,
      time: time,
      name: firebaseApp.auth().currentUser.displayName,
      text: this.state.postText
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    color: getColor()
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(255,255,255,.6)',
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 2,
  },
  inputField: {
    flex: 1,
    padding: 0,
    textAlignVertical: 'top'
  },
  btnContainer: {
    width: 120,
    height: 40,
    backgroundColor: getColor(),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  btnText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: getColor('#ffffff')
  }
})
