// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAOO0YkWPvCyTSk_jEUUlPFBDNG1G2_z6M',
  authDomain: 'mister-poster.firebaseapp.com',
  databaseURL: 'https://mister-poster.firebaseio.com',
  storageBucket: 'mister-poster.appspot.com',
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
