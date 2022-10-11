// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//import  * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBTkN24ssygOo96T-shMrxGiWhmsa7CujY",
  authDomain: "clone-e8620.firebaseapp.com",
  projectId: "clone-e8620",
  storageBucket: "clone-e8620.appspot.com",
  messagingSenderId: "727852455541",
  appId: "1:727852455541:web:af1369abea7d6f7cc90a3c",
  measurementId: "G-G71M9TJR6N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
