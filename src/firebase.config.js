import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmNDgGxzjoTvrT8-5r6T9Ze_wk25f3SQM",
  authDomain: "personal-transaction-85543.firebaseapp.com",
  databaseURL: "https://personal-transaction-85543-default-rtdb.firebaseio.com",
  projectId: "personal-transaction-85543",
  storageBucket: "personal-transaction-85543.appspot.com",
  messagingSenderId: "157839141045",
  appId: "1:157839141045:web:c4ee77d7f29e188c47b6fc"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };