
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBeVHEfcyC2jlHM_NhoQS1TIvOiC_5S-0g",
  authDomain: "laundry-service-bbd3f.firebaseapp.com",
  projectId: "laundry-service-bbd3f",
  storageBucket: "laundry-service-bbd3f.appspot.com",
  messagingSenderId: "1071919156645",
  appId: "1:1071919156645:web:36c1fe1d31890ef6522c4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
// const auth = getAuth(app);
const db = getFirestore();

export {auth, db};