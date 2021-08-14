import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB6EJO6_FsDV4ReWgQKlZBGZrtmGCO_rlc",
  authDomain: "fir-3fe2a.firebaseapp.com",
  projectId: "fir-3fe2a",
  storageBucket: "fir-3fe2a.appspot.com",
  messagingSenderId: "937190075935",
  appId: "1:937190075935:web:2e9a9514dd3e8553aaef2a",
  measurementId: "G-NB8CLS25XF",
};

const fireBase = firebase.initializeApp(firebaseConfig);

export const auth = fireBase.auth();
export const dataBase = fireBase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
