



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5dh4DFCRBu-M1EjF4JvUzjVfbGLLw__c",
    authDomain: "ghotul-homestays-af386.firebaseapp.com",
    projectId: "ghotul-homestays-af386",
    storageBucket: "ghotul-homestays-af386.firebasestorage.app",
    messagingSenderId: "902954611127",
    appId: "1:902954611127:web:600aaccc852657d1e23832",
    measurementId: "G-J7NTNCBQCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app, auth };