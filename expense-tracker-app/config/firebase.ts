// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeAuth, getReactNativePersistence} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Nz2IVXR-JJC3m7IgqyRJTFWBfVo7eDM",
  authDomain: "expense-tracker-b6243.firebaseapp.com",
  projectId: "expense-tracker-b6243",
  storageBucket: "expense-tracker-b6243.firebasestorage.app",
  messagingSenderId: "240231097336",
  appId: "1:240231097336:web:1aaa83be9993e1ff3c6c0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

//db
export const db = getFirestore(app);

