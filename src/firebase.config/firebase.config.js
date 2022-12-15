import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRPFrJ0wQyvpa5I4bilnFrwwSJI8u_xNE",
  authDomain: "managerum-lite.firebaseapp.com",
  projectId: "managerum-lite",
  storageBucket: "managerum-lite.appspot.com",
  messagingSenderId: "513158396757",
  appId: "1:513158396757:web:e14072fc2fa1a00abc8ddc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
