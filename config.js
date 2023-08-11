import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDtvmxpkI4sYBr_b0PvJBGKXEc1ww7uzJ8",
    authDomain: "cycle-rental-b1f85.firebaseapp.com",
    projectId: "cycle-rental-b1f85",
    storageBucket: "cycle-rental-b1f85.appspot.com",
    messagingSenderId: "646559545028",
    appId: "1:646559545028:web:abcb9649d868ed31817b91"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
