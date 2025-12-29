

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, get, remove, update  } from "firebase/database";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIZ8aUAae42kC0PoUmLmL14ovhVkpXfYE",
  authDomain: "qaidyn-partners.firebaseapp.com",
  databaseURL: "https://qaidyn-partners-default-rtdb.firebaseio.com",
  projectId: "qaidyn-partners",
  storageBucket: "qaidyn-partners.firebasestorage.app",
  messagingSenderId: "738905042256",
  appId: "1:738905042256:web:e9cbaf457f9ee2939b5055",
  measurementId: "G-B5M066LKVR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {
  database,
  storage,
  auth,
  ref,
  set,
  push,
  get,
  remove,
  update,
  storageRef,
  uploadBytes,
  getDownloadURL,
  
};
