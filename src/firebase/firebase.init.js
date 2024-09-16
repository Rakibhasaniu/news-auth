// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD94O2LO3WkIknAFSGo8RF7ndv7ZQT_IDk",
  authDomain: "news-auth-95b8f.firebaseapp.com",
  projectId: "news-auth-95b8f",
  storageBucket: "news-auth-95b8f.appspot.com",
  messagingSenderId: "520644949247",
  appId: "1:520644949247:web:70812640225dfc563f08ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;