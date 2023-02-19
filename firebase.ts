import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_5jcOjLC0l-ZgBvtVL2q2Un_SDHoS-aw",
  authDomain: "chatgpt-clone-377717.firebaseapp.com",
  projectId: "chatgpt-clone-377717",
  storageBucket: "chatgpt-clone-377717.appspot.com",
  messagingSenderId: "216247762739",
  appId: "1:216247762739:web:1a37ebe95fe67c11768846"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db};