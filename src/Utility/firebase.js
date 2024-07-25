import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApvTbI5TF23er_19RAlC3ocWFz79TUjjg",
  authDomain: "fir-82ca4.firebaseapp.com",
  projectId: "fir-82ca4",
  storageBucket: "fir-82ca4.appspot.com",
  messagingSenderId: "998909338711",
  appId: "1:998909338711:web:ae7740128803e72b8a2f12",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
