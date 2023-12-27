// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrUXs_pSCbNnBbYbJP4XLVRL3H-jymucI",
  authDomain: "grow-development-4b08b.firebaseapp.com",
  projectId: "grow-development-4b08b",
  storageBucket: "grow-development-4b08b.appspot.com",
  messagingSenderId: "318787659647",
  appId: "1:318787659647:web:a20f597088e369579fdc4a",
  measurementId: "G-C3ETVDMWPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
