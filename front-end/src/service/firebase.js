import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBnfp8r4bEHwEr5UFVayPQUXpcYp-zgEpQ",
  authDomain: "tinderclone-f99fd.firebaseapp.com",
  databaseURL: "https://tinderclone-f99fd.firebaseio.com",
  projectId: "tinderclone-f99fd",
  storageBucket: "tinderclone-f99fd.appspot.com",
  messagingSenderId: "1095676595812",
  appId: "1:1095676595812:web:3b72695530d85930261971",
  measurementId: "G-N0JP030P1G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;