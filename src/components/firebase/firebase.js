
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
//import {initializeApp} from 'firebase/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxoVZHvRyDoJZQk__Jw-iwTFzUNzVVa6s",
  authDomain: "my-first-project-01-d3f18.firebaseapp.com",
  projectId: "my-first-project-01-d3f18",
  storageBucket: "my-first-project-01-d3f18.appspot.com",
  messagingSenderId: "378564877022",
  appId: "1:378564877022:web:b875174628a9464385804f",
  measurementId: "G-6GS07W478T"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// const app = initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'});

export const signinInWithGoogle=()=>auth.signInWithPopup(provider);
// const analytics = getAnalytics(app);