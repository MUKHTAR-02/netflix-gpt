// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNy3qmUTojX3ppSwHx54fE2S7Aik2mNAo",
  authDomain: "netflixgpt-8e90c.firebaseapp.com",
  projectId: "netflixgpt-8e90c",
  storageBucket: "netflixgpt-8e90c.firebasestorage.app",
  messagingSenderId: "1037714890271",
  appId: "1:1037714890271:web:05d83e110c0c58515e3f2a",
  measurementId: "G-7857N421QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();