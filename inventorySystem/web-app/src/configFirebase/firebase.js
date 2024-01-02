// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANWqSlFO_MGpZSt_Y_Jw42cTX4FHptdSA",
  authDomain: "inventoryapp-674f1.firebaseapp.com",
  projectId: "inventoryapp-674f1",
  storageBucket: "inventoryapp-674f1.appspot.com",
  messagingSenderId: "410644775211",
  appId: "1:410644775211:web:d3a4be65c5cc50a4ec856e",
  measurementId: "G-8FMD2T3L8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firebaseDB = getFirestore(app);
