import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1yGEMfyyf9HlOKPwEqvgrWGuz8223gKE",
  authDomain: "whatsapp-bffb9.firebaseapp.com",
  projectId: "whatsapp-bffb9",
  storageBucket: "whatsapp-bffb9.appspot.com",
  messagingSenderId: "221535326379",
  appId: "1:221535326379:web:824da0bd588cdbff24e7ee",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
