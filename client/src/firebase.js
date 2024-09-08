// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-1b3a9.firebaseapp.com",
  projectId: "mern-auth-1b3a9",
  storageBucket: "mern-auth-1b3a9.appspot.com",
  messagingSenderId: "245594991459",
  appId: "1:245594991459:web:5e906a1c07b69401478156"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);