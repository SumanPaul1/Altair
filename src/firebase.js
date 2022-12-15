import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCeh2j-ZM00IskifPVZe7i1UQd8fRGZCcU",
  authDomain: "chat-dfe99.firebaseapp.com",
  projectId: "chat-dfe99",
  storageBucket: "chat-dfe99.appspot.com",
  messagingSenderId: "440212328930",
  appId: "1:440212328930:web:4ae00aee64335358e8a9bb"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();