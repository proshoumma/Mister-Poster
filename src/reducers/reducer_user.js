/**
 * reducer to get/set information about current user
 */

import { SIGNIN } from '../actions'

const defaultUser = {
  email  : null,
  signInStatus: null
}

export default (state = defaultUser, action) => {
  switch (action.type) {
    case SIGNIN:
      return state
    default:
      return state
  }
}
