// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuL_tUD7p8Jm1WoFOKUkfs8dss3E1DMNA",
  authDomain: "the-forest-studio.firebaseapp.com",
  projectId: "the-forest-studio",
  storageBucket: "the-forest-studio.appspot.com",
  messagingSenderId: "153494096260",
  appId: "1:153494096260:web:feee8a0d350b4d8bbb75d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
