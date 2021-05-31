import * as firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

/** @todo put firebase configs in their own file for Production */
const firebaseConfig = {
    apiKey: "AIzaSyBqUJiwEUpgDb6fN_1vvZphP6_cSKemWtk",
    authDomain: "cbmvp-b70bf.firebaseapp.com",
    projectId: "cbmvp-b70bf",
    storageBucket: "cbmvp-b70bf.appspot.com",
    messagingSenderId: "746101867634",
    appId: "1:746101867634:web:493da8b343090f4b332eeb"
  };
  
  let app;

  if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app()
  }
  
  const db = app.firestore()
  const auth = firebase.auth()
  
  export { db, auth };