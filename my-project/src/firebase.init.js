// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn0JrNiUWSBTxfZN6fNP6e4E9a-qcVPMY",
  authDomain: "email-login-auth-37905.firebaseapp.com",
  projectId: "email-login-auth-37905",
  storageBucket: "email-login-auth-37905.firebasestorage.app",
  messagingSenderId: "481856376840",
  appId: "1:481856376840:web:f61614dbc73bfb616e81bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;