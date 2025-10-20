// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYGs_cgoe8sCxVZHS02B1SMxGZ6DdNWEc",
  authDomain: "dragon-news-app-701c4.firebaseapp.com",
  projectId: "dragon-news-app-701c4",
  storageBucket: "dragon-news-app-701c4.firebasestorage.app",
  messagingSenderId: "295506285513",
  appId: "1:295506285513:web:a442b8dd0e6724150d8e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;