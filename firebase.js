import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAxMvQrEVvVODwMnC-PKh6haLPk4w3lAxI",
  authDomain: "car-dealership-9bbbe.firebaseapp.com",
  projectId: "car-dealership-9bbbe",
  storageBucket: "car-dealership-9bbbe.appspot.com",
  messagingSenderId: "1088203370503",
  appId: "1:1088203370503:web:3aa620d2ec46fc9bd17aa2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
