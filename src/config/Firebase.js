import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDnBnQ4DKgcwuQDmAORVDn8xFODZoTj4C4",
    authDomain: "kick-off-2ad9c.firebaseapp.com",
    databaseURL: "https://kick-off-2ad9c.firebaseio.com",
    projectId: "kick-off-2ad9c",
    storageBucket: "kick-off-2ad9c.appspot.com",
    messagingSenderId: "346655322991",
    appId: "1:346655322991:web:bc426b5acb41435a0cee9a",
    measurementId: "G-SV1YYZ8DTZ"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export  const database = fb.firestore();