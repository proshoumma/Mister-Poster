/**
 * reducer to save posts for persistancy
 */

import { SAVEPOSTS } from '../actions'

export default (posts = {}, action) => {
  switch(action.type) {
    case SAVEPOSTS:
      const newPosts = action.payload
      return newPosts

    default:
      return posts
  }
}
