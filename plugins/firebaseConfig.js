import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyDGpu_Q-PAkAwilxaW1TeT4IUMNPQZtOK0',
    authDomain: 'hostingtest-ba7ac.firebaseapp.com',
    databaseURL: 'https://hostingtest-ba7ac.firebaseio.com',
    projectId: 'hostingtest-ba7ac',
    storageBucket: 'hostingtest-ba7ac.appspot.com',
    messagingSenderId: '31348234854',
    appId: '1:31348234854:web:efb8207830b18b9386aba7',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
