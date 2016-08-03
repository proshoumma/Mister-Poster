/**
 * the settings tab
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { firebaseApp } from '../../firebase'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Settings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      email: '',
      signOutMsg: 'Sign Out'
    }
  }

  componentDidMount() {
    const user = firebaseApp.auth().currentUser
    if (user != null) {
      const name = user.displayName
      const uemail = user.email

      this.setState({
        user: name,
        email: uemail
      })
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.listItem} onPress={this._logOut.bind(this)}>
        <Icon name='md-log-out' size={30} color='rgba(0,0,0,.5)' style={styles.itemIcon}/>
        <Text style={styles.itemName}>
          {this.state.signOutMsg}, {this.state.user}, {this.state.email}
        </Text>
      </TouchableOpacity>
    )
  }

  _logOut() {
    this.setState({signOutMsg: 'Signing Out...'})
    firebaseApp.auth().signOut().then(() => {
      this.props.onLogOut()
    })
  }
}

const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemIcon: {
    marginLeft: 20,
    marginRight: 20
  },
  itemName: {
    fontFamily: 'Roboto-Regular'
  }
})
