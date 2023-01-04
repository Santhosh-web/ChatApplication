
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBzShiW_9TIUcBXXOhD1CXZD262BkCwmUk",
  authDomain: "chat-app-14620.firebaseapp.com",
  projectId: "chat-app-14620",
  storageBucket: "chat-app-14620.appspot.com",
  messagingSenderId: "981125048358",
  appId: "1:981125048358:web:9c911af0c950aaa7745ee7",
  measurementId: "G-Q8G6BCS664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



 export const auth = getAuth();
 export const storage = getStorage();
export const db = getFirestore();