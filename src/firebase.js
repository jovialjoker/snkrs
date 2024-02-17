import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3nZsmPxbdcy3xVFCTboKZRRG5mRQlXro",
  authDomain: "snkrs-b5031.firebaseapp.com",
  projectId: "snkrs-b5031",
  storageBucket: "snkrs-b5031.appspot.com",
  messagingSenderId: "1028380048311",
  appId: "1:1028380048311:web:789eff84ec11634a800632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
