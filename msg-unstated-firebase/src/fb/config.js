import firebase from 'firebase'
require('firebase/firestore')

const config = {
  apiKey: process.env.REACT_APP_FB_API,
  authDomain: process.env.REACT_APP_FB_AUTH,
  databaseURL: process.env.REACT_APP_FB_DB,
  projectId: process.env.REACT_APP_FB_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE,
  messagingSenderId: process.env.REACT_APP_FB_MSG_ID
}

firebase.initializeApp(config)

export default firebase

export const db = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()