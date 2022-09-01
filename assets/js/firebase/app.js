// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyC4Z0TBcUAtxhjoUIg-ycVUBwxepyF7qSE",
    authDomain: "experience-mtb.firebaseapp.com",
    projectId: "experience-mtb",
    storageBucket: "experience-mtb.appspot.com",
    messagingSenderId: "1028643705742",
    appId: "1:1028643705742:web:409304d4f3efa30420cadf",
    measurementId: "G-MVER66E9X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export default app;