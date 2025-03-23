import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUmyKLhi_oqGMI_PsZIADFhMA0WC_JnPc",
  authDomain: "honkaiupdates-36385.firebaseapp.com",
  projectId: "honkaiupdates-36385",
  storageBucket: "honkaiupdates-36385.appspot.com",
  messagingSenderId: "386440101315",
  appId: "1:386440101315:web:3eaa65116999bbcba15176",
  measurementId: "G-GBEB79F400"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const analytics = getAnalytics(app);


export default db;