// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4WpUUSFqoMA3g4Xu9fy3zZ-FVjK9EQ9M",
  authDomain: "go-world-auth.firebaseapp.com",
  projectId: "go-world-auth",
  storageBucket: "go-world-auth.appspot.com",
  messagingSenderId: "977933861581",
  appId: "1:977933861581:web:815958d0a33013b872df84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;