import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCtoj84714j8qudtoXgUfqWfSvUJi69HHw",
    authDomain: "bank1-788ea.firebaseapp.com",
    databaseURL: "https://bank1-788ea-default-rtdb.firebaseio.com",
    projectId: "bank1-788ea",
    storageBucket: "bank1-788ea.appspot.com",
    messagingSenderId: "388029149447",
    appId: "1:388029149447:web:4bb7db6402fbe4e18e55a2" 
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };