// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCKhG9s5nUeZS5MPguG7QX6wyct4W5wvFg",
    authDomain: "todolist-28200.firebaseapp.com",
    projectId: "todolist-28200",
    storageBucket: "todolist-28200.appspot.com",
    messagingSenderId: "702726220328",
    appId: "1:702726220328:web:edff1c2dd73a9ffb2ce31d",
    measurementId: "G-SVDGRBQ2F3"
});

const db = firebaseApp.firestore();


export default db;