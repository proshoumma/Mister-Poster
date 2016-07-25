/**
 * combination of all the reducers
 * to create single application store
 * blessings of 'redux' :-)
 */

import { combineReducers } from 'redux'
import currentUser from './reducer_user'

export default rootReducer = combineReducers({
  currentUser
})
