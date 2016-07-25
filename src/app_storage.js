/**
 * this component will create application storage
 * for data persistence and configure redux storage
 * also pass the store to main application component
 */

import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import * as storage from 'redux-storage'

// import the main application component
import App from './app'

// import the root reducer and create storage for persistence
// it is important because loaded data will be injected here
import RootReducer from './reducers'
const appStorage =  storage.reducer(RootReducer)

// create async storage engine
import createEngine from 'redux-storage-engine-reactnativeasyncstorage'
const engine = createEngine('mister-poster-application-engine')

// apply middlewares and create the store with application storage
const middleware = storage.createMiddleware(engine)
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)
const store = createStoreWithMiddleware(appStorage)

// create loader to load app storage from device
const load = storage.createLoader(engine)
load(store)


export default class AppStorage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
