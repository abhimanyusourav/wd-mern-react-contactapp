
import MyFirebase from "firebase/compat/app"
import "firebase/compat/firestore"
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyANYUdyP_RXaOAbPpC6Jr_l7_6FFBsyHYY",
    authDomain: "contactapp-89b2c.firebaseapp.com",
    projectId: "contactapp-89b2c",
    storageBucket: "contactapp-89b2c.appspot.com",
    messagingSenderId: "969504536910",
    appId: "1:969504536910:web:4376230e32e4b675d6461f"
};


const app = MyFirebase.initializeApp(firebaseConfig);

export const db = MyFirebase.firestore()