// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA_t-JKbXB6BF-PGx0D5IWFit6093Ji0c",
  authDomain: "individu-project-frontend.firebaseapp.com",
  projectId: "individu-project-frontend",
  storageBucket: "individu-project-frontend.firebasestorage.app",
  messagingSenderId: "485181371085",
  appId: "1:485181371085:web:958e50f4279de0bb286f84",
  databaseURL: "https://individu-project-frontend-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
