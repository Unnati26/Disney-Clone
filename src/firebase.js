import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAKMt841T101gxu0CFPgG0yAUvTFrUZb8U",
    authDomain: "disneyplus-clone-67b1d.firebaseapp.com",
    projectId: "disneyplus-clone-67b1d",
    storageBucket: "disneyplus-clone-67b1d.appspot.com",
    messagingSenderId: "185931640013",
    appId: "1:185931640013:web:c1e9f526f2c3791d8c4d84",
    measurementId: "G-R3JZ72F699"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth , provider, storage};
  export default db;