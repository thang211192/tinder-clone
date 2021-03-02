import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADe-ejTUROSGlQk2jaUE7e7d3r-pIiBc8",
    authDomain: "tinder-clone-1c1bd.firebaseapp.com",
    projectId: "tinder-clone-1c1bd",
    storageBucket: "tinder-clone-1c1bd.appspot.com",
    messagingSenderId: "556730829126",
    appId: "1:556730829126:web:195c5714fa668b1829bd47",
    measurementId: "G-7TRT8NYC8K"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore()

export default database;