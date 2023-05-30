// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByfE35euQGis04luxDW1687pgeFaQYTU0",
  authDomain: "codecamp-jjm.firebaseapp.com",
  projectId: "codecamp-jjm",
  storageBucket: "codecamp-jjm.appspot.com",
  messagingSenderId: "906893893347",
  appId: "1:906893893347:web:0df248731af938a7402fd6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
