import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initialzeApp({
    apiKey: "AIzaSyD455V_rx6yEk6CsoAkjXJmwxwefDfNpJA",

    authDomain: "texter-webapp.firebaseapp.com",

    projectId: "texter-webapp",

    storageBucket: "texter-webapp.appspot.com",

    messagingSenderId: "1001618244294",

    appId: "1:1001618244294:web:4674b7ab0ab4b176cb4dc7",

    measurementId: "G-Z5VBDFD54L"
});

const db = firebaseApp.firestore();

export default db;