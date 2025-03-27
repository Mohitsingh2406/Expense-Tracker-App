// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries]
import {initializeAuth , getReactNativePersistence} from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaSAlyKBopngfEo4zNsp6w_zIhOli9w2k",
    authDomain: "expense-tracker-63c24.firebaseapp.com",
    projectId: "expense-tracker-63c24",
    storageBucket: "expense-tracker-63c24.firebasestorage.app",
    messagingSenderId: "102666605701",
    appId: "1:102666605701:web:53ec86b5e03658fbcc45ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage),
})

export const firestore = getFirestore(app)