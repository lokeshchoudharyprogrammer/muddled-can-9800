// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAGhLDXa_-frIeSJZon9dipEsm8Nw1Pf8I',
  authDomain: 'nikonbeauty-c6dbb.firebaseapp.com',
  projectId: 'nikonbeauty-c6dbb',
  storageBucket: 'nikonbeauty-c6dbb.appspot.com',
  messagingSenderId: '985862280433',
  appId: '1:985862280433:web:92b1c77f2a57d0bb204550',
  measurementId: 'G-MRSB35VRXK',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);