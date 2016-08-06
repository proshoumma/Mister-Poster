/**
 * reducer to get/set information about current user
 */

import { SIGNEDIN } from '../actions'
import { SIGNEDOUT } from '../actions'

const defaultUser = {
  email  : null,
  name: null,
  uid: null,
  signInStatus: false
}

export default (state = defaultUser, action) => {
  switch (action.type) {
    case SIGNEDIN:
      const {
        email, name, uid
      } = action.payload
      const signInState = {
        email,
        name,
        uid,
        signInStatus: true
      }
      return signInState

    case SIGNEDOUT:
      const signOutState = {
        email: null,
        name: null,
        uid: null,
        signInStatus: false
      }
      return signOutState

    default:
      return state
  }
}
