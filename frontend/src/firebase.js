import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth' 
const firebaseConfig = {
  apiKey: "AIzaSyAce6-UUTIssDloLBGkwWZDVomqt6Y1mqI",
  authDomain: "video-5352e.firebaseapp.com",
  projectId: "video-5352e",
  storageBucket: "video-5352e.appspot.com",
  messagingSenderId: "807329397691",
  appId: "1:807329397691:web:60cf4a7b7b2a442044e29e",
  measurementId: "G-T7JSB61E6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app