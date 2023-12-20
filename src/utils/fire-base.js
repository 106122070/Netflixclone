// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGoCuvrqpLPM51JHIbHkxNaXs2H3FWqj0",
  authDomain: "netflix-clone11-4e86b.firebaseapp.com",
  projectId: "netflix-clone11-4e86b",
  storageBucket: "netflix-clone11-4e86b.appspot.com",
  messagingSenderId: "481887697125",
  appId: "1:481887697125:web:589b28248bd9ba742a3c0c",
  measurementId: "G-DXEB7M8B64"
};


const app = initializeApp(firebaseConfig);
export const firestore1 = getFirestore(app);
export const fireAuth = getAuth(app);