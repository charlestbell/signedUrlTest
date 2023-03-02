import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebase-config.js";
import { getAuth } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const db = getFirestore(firebase);

export const functions = getFunctions(firebase);

export const storage = getStorage(firebase);

// connectFunctionsExmulator(functions, 'localhost', 5001); // Only engage when testing with sandbox, otherwise it breaks the app.
