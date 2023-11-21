// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiIrwaDaj5-E-dp5PJgdTLTx-Jzct8y00",
  authDomain: "secondcycle-production.firebaseapp.com",
  projectId: "secondcycle-production",
  storageBucket: "secondcycle-production.appspot.com",
  messagingSenderId: "892216877258",
  appId: "1:892216877258:web:97e2cad8f38d2c51e99433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export default auth 