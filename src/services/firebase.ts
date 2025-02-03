import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt68WFyhYC1vQAoZG59GZiLMj2nQJbwt8",
  authDomain: "joybox-b9845.firebaseapp.com",
  projectId: "joybox-b9845",
  storageBucket: "joybox-b9845.firebasestorage.app",
  messagingSenderId: "191874820417",
  appId: "1:191874820417:web:7c54ca90d0fb45812ed9c0",
  measurementId: "G-500PKPXQGC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
