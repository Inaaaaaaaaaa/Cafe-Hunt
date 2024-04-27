// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPDbWsGSA0FrM97KBzvZepd1PlU8slS-8", 
  authDomain: "cafe-fob11.firebaseapp.com", 
  projectId: "cafe-fob11", 
  storageBucket: "cafe-fob11.appspot.com", 
  messagingSenderId: "590616076859", 
  appId: "1:590616076859:web:983b503da35e8c55a1721e" 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };