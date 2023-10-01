
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD8g6l37Zn5OxkySCSZj0Bc7PK3MDtGqKg",
  authDomain: "b-shop-2d430.firebaseapp.com",
  projectId: "b-shop-2d430",
  storageBucket: "b-shop-2d430.appspot.com",
  messagingSenderId: "437597657307",
  appId: "1:437597657307:web:feb4b466d8d18559d594fe",
  measurementId: "G-MCGC8PXHEF"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)
const storg=getStorage(app)
export {app,auth,db,storg}