/**
 * reducer to get/set information about current user
 */

import { GET_USER } from '../actions'

const defaultUser = {
  username  : 'Hello World'
}

export default (state = defaultUser, action) => {
  switch (action.type) {
    case GET_USER:
      return state

    default:
      return state
  }
}
