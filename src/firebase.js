// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: [YOUR API KEY],
  authDomain: [YOUR AUTH DOMAIN],
  databaseURL: [YOUR DATABASE URL],
  storageBucket: [STORAGE BUCKET],
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
