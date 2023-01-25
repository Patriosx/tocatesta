// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS-AlTBL8wAeh1Fe8CynPWhYjsdA6YDH4",
  authDomain: "tocatesta-2022.firebaseapp.com",
  projectId: "tocatesta-2022",
  storageBucket: "tocatesta-2022.appspot.com",
  messagingSenderId: "836474669536",
  appId: "1:836474669536:web:dfda3e8955daee87850385",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const majorScaleRef = collection(db, "major_scale");

export async function getMajorScaleFirebase() {
  const q = await getDocs(majorScaleRef);
  const list = q.docs.map((doc) => doc.data());
  return list;
}
