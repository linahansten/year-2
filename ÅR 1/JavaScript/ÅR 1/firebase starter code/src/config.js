// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBi2-h_rKMf3tveeeoJuoNKGWBl51jNyxU",
    authDomain: "fb-webpack.firebaseapp.com",
    projectId: "fb-webpack",
    storageBucket: "fb-webpack.appspot.com",
    messagingSenderId: "921384139081",
    appId: "1:921384139081:web:bc230109a6b276b5a60298"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()
//exporterar vidare till index.js
export { auth, app, db } 
