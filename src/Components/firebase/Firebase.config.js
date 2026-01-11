// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtTsIpDr-vPCMQYGKBzDCeEIYlFa1Wiz0",
  authDomain: "cryptopulsenow.firebaseapp.com",
  projectId: "cryptopulsenow",
  storageBucket: "cryptopulsenow.firebasestorage.app",
  messagingSenderId: "551826746272",
  appId: "1:551826746272:web:f4348a1dea9ef26ba692c5"
};

// Initialize Firebase
let app = null;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error('Firebase initialization failed:', error);
}

export default app;