// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdaWJA2U5AOfKCcqta11Fxs218-e-fFek",
  authDomain: "projectindividual-frontend.firebaseapp.com",
  projectId: "projectindividual-frontend",
  storageBucket: "projectindividual-frontend.firebasestorage.app",
  messagingSenderId: "886331131887",
  appId: "1:886331131887:web:9c2b90db9cf05e092a581a",
  measurementId: "G-GVKFGCBGSR",
  databaseURL: "https://projectindividual-frontend-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
