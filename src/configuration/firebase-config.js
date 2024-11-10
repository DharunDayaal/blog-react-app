// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCumh0oIunWFds8YNubCHq1GHdeos2nyfM",
  authDomain: "blog-website-6ed91.firebaseapp.com",
  projectId: "blog-website-6ed91",
  storageBucket: "blog-website-6ed91.firebasestorage.app",
  messagingSenderId: "154157180541",
  appId: "1:154157180541:web:27e2091b43d58fb9fc3314",
  measurementId: "G-8WQ1E77XQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app