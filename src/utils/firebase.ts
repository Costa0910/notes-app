// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwFPKU_pWtb6XJeeEUXI0Gh_nobxB-Kk4",
  authDomain: "note-app-f4f78.firebaseapp.com",
  projectId: "note-app-f4f78",
  storageBucket: "note-app-f4f78.appspot.com",
  messagingSenderId: "4092838253",
  appId: "1:4092838253:web:36e6b674bd0b982532da64",
  measurementId: "G-PJTKZY7ZT4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const db = getFirestore(app);

export { db };
