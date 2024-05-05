// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL1eBuGS6dUIm5twe6hq0kx-u3ekK83-M",
  authDomain: "meego-elevation.firebaseapp.com",
  projectId: "meego-elevation",
  storageBucket: "meego-elevation.appspot.com",
  messagingSenderId: "513354219956",
  appId: "1:513354219956:web:bb554a9cd676f536ad32e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let db = Firestore(app);