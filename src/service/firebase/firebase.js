// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTn4ZeKDy2OpagOIeXN1Dpy0HbhvB_V30",
    authDomain: "aaaa-8ae0d.firebaseapp.com",
    projectId: "aaaa-8ae0d",
    storageBucket: "aaaa-8ae0d.appspot.com",
    messagingSenderId: "1002288361429",
    appId: "1:1002288361429:web:baeb28e3ae07177c03d75c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);