import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyA7A-K1zSK7axokZjQBWzDKeCrxsmiBdA8",
    authDomain: "santa-app-6c0de.firebaseapp.com",
    databaseURL: "https://santa-app-6c0de.firebaseio.com",
    projectId: "santa-app-6c0de",
    storageBucket: "santa-app-6c0de.appspot.com",
    messagingSenderId: "665751193441",
    appId: "1:665751193441:web:be54931a794229e11f6720"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();