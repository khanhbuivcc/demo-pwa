// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-xqr23XUxi-p9bqYgjtRWBPTsXdV6s-g",
  authDomain: "pwa-push-message.firebaseapp.com",
  projectId: "pwa-push-message",
  storageBucket: "pwa-push-message.appspot.com",
  messagingSenderId: "409350048234",
  appId: "1:409350048234:web:ea3c3f3ab11b8915a20a93",
  measurementId: "G-HJ9KHB28X6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
