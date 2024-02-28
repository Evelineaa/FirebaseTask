import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp,orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLBcdcwvSMSBoLa_PScIq0Ugx_SH2mukM",
  authDomain: "chat-1a67e.firebaseapp.com",
  projectId: "chat-1a67e",
  storageBucket: "chat-1a67e.appspot.com",
  messagingSenderId: "53715263902",
  appId: "1:53715263902:web:b251159626f1c32170368f"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES
};