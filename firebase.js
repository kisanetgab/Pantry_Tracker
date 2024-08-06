// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNcss9BmXRlpQSrqNTHc43Tz9PIkbs_jg",
  authDomain: "inventorymanagement-f9d60.firebaseapp.com",
  projectId: "inventorymanagement-f9d60",
  storageBucket: "inventorymanagement-f9d60.appspot.com",
  messagingSenderId: "620072834085",
  appId: "1:620072834085:web:c15b38920c6e18b58b1bcc",
  measurementId: "G-KZSVH3VYZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};