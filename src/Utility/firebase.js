import firebase from "firebase/compat/app";
// AUthentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnDtWXZ2OWtxax_AEiKs9NvOsCn2IiCuA",
  authDomain: "clone-2024-13eda.firebaseapp.com",
  projectId: "clone-2024-13eda",
  storageBucket: "clone-2024-13eda.appspot.com",
  messagingSenderId: "179551702747",
  appId: "1:179551702747:web:0c00b7f082f39e79a646fe",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
