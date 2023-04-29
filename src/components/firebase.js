// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOp9jMLA7-K6ROk44P56ck5EpK0r0SV8o",
    authDomain: "tripplanner-8bbd9.firebaseapp.com",
    projectId: "tripplanner-8bbd9",
    storageBucket: "tripplanner-8bbd9.appspot.com",
    messagingSenderId: "41510920337",
    appId: "1:41510920337:web:542540d09c21cfee521f30",
    measurementId: "G-X15K9BR4ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// const analytics = getAnalytics(app);