
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBb_G-9nHQTmzspdGTFE5uQX5bxTDZecEQ",
  authDomain: "furniture-online-5b100.firebaseapp.com",
  projectId: "furniture-online-5b100",
  storageBucket: "furniture-online-5b100.appspot.com",
  messagingSenderId: "850354747554",
  appId: "1:850354747554:web:f7ec3cdb65d762b4cd7ffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;