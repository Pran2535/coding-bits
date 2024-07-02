// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcuM2fvK33jEEUtGQy-e_WEwhcwiYPjq4",
  authDomain: "crypto-tracing.firebaseapp.com",
  projectId: "crypto-tracing",
  storageBucket: "crypto-tracing.appspot.com",
  messagingSenderId: "102771429534",
  appId: "1:102771429534:web:40042943f9a19c9deeab8f",
  measurementId: "G-XBTC4K6Q2V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
