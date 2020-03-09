import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAcbI-uD49_CPmLXVPYRb6C4R_friowW04",
  authDomain: "think-piece-42d53.firebaseapp.com",
  databaseURL: "https://think-piece-42d53.firebaseio.com",
  projectId: "think-piece-42d53",
  storageBucket: "think-piece-42d53.appspot.com",
  messagingSenderId: "271749125798",
  appId: "1:271749125798:web:619a9a5975de3caad78667",
  measurementId: "G-S6DBN4EBXK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
window.firebase = firebase;

export default firebase;
