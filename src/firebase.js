import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4zwryLJI0f1vW0ECXtNheUE9BCx7K8rI",
  authDomain: "facebook-messenger-clone-5385a.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-5385a.firebaseio.com",
  projectId: "facebook-messenger-clone-5385a",
  storageBucket: "facebook-messenger-clone-5385a.appspot.com",
  messagingSenderId: "852188007049",
  appId: "1:852188007049:web:f19238f5f2d191448ed458",
  measurementId: "G-K741ZVK52G",
});

const db = firebaseApp.firestore();

export default db;
