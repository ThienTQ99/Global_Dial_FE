// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw9e0o7BmFUUopQXFNhqSIlkPAplXZoF4",
  authDomain: "global-dial-4f1cd.firebaseapp.com",
  projectId: "global-dial-4f1cd",
  storageBucket: "global-dial-4f1cd.appspot.com",
  messagingSenderId: "559776813233",
  appId: "1:559776813233:web:4485de40aaaee42eef5290",
  measurementId: "G-7EF396N20Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};
