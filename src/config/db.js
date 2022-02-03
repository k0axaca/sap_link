import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBjXv-tZU4XJP6S1qBMNQ0CQPzHoTE6d8M",
  authDomain: "saplink-25865.firebaseapp.com",
  projectId: "saplink-25865",
  storageBucket: "saplink-25865.appspot.com",
  messagingSenderId: "918769095835",
  appId: "1:918769095835:web:4133116f4d0a4ce9fbe23e",
  measurementId: "G-SHW1ZB7P34"
});

// Initialize Firebase

const db = firebaseApp.firestore();

export default db;


const { Timestamp } = firebase.firestore
export { Timestamp }
