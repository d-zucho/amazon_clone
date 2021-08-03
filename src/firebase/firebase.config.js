import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAIXs9THUvShCx7Nv1jpaQyVPpBQkmNH4Y',
  authDomain: 'clone-b0d26.firebaseapp.com',
  projectId: 'clone-b0d26',
  storageBucket: 'clone-b0d26.appspot.com',
  messagingSenderId: '816088368659',
  appId: '1:816088368659:web:3cb53c8b0347f7b66d21e6',
})

const db = firebase.firestore()

export default db
