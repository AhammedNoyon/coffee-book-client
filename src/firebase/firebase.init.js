// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2VM_t3yeK0sppVkNX1dJw8KXUW7J9-fk",
  authDomain: "coffee-book-99a4d.firebaseapp.com",
  projectId: "coffee-book-99a4d",
  storageBucket: "coffee-book-99a4d.firebasestorage.app",
  messagingSenderId: "261612763904",
  appId: "1:261612763904:web:68c670c3a1c71e4c71d1e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
