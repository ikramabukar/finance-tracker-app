import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBQLzmvBa5sCixN9-48pSeo7I7xLkuTFIs",
  authDomain: "mymoney-3f230.firebaseapp.com",
  projectId: "mymoney-3f230",
  storageBucket: "mymoney-3f230.appspot.com",
  messagingSenderId: "522395571404",
  appId: "1:522395571404:web:c29336a84774c5ae3bde69"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }