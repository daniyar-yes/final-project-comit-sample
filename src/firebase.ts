// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq-AgxGcNhwZJWv6k7YJ7I88POLnBYXbY",
  authDomain: "final-project-comit-87269.firebaseapp.com",
  projectId: "final-project-comit-87269",
  storageBucket: "final-project-comit-87269.firebasestorage.app",
  messagingSenderId: "576766556637",
  appId: "1:576766556637:web:6098da3ac82f84b2619e34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }