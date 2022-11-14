import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCz66ZlRkFoUWU27qdl3pRTPSupG_foUE",
  authDomain: "netflix-clone-31e58.firebaseapp.com",
  projectId: "netflix-clone-31e58",
  storageBucket: "netflix-clone-31e58.appspot.com",
  messagingSenderId: "355773567687",
  appId: "1:355773567687:web:48b64d002a91daa89864e2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
