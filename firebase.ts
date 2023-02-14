import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8NGsM_ktuRpm6rbDDJ6onwCkrEisOhGA",
  authDomain: "chatgpt-clone-2b176.firebaseapp.com",
  projectId: "chatgpt-clone-2b176",
  storageBucket: "chatgpt-clone-2b176.appspot.com",
  messagingSenderId: "397222108976",
  appId: "1:397222108976:web:9f94b473e593e9c69db2f5"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db};