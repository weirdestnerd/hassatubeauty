// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  doc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAn6yBGJfpnm6tbVwv-j79V19GLrd6cKqA",
  authDomain: "hassatubeauty.firebaseapp.com",
  projectId: "hassatubeauty",
  storageBucket: "hassatubeauty.appspot.com",
  messagingSenderId: "683010890895",
  appId: "1:683010890895:web:0b07f04b0fec0b80f0a4fa",
  measurementId: "G-681HCMYMKR",
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const googleSignIn = () => signInWithPopup(auth, new GoogleAuthProvider());

const signedInUserState = (callback) => onAuthStateChanged(auth, callback);

const passwordReset = (email) => sendPasswordResetEmail(auth, email);

const createUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

const logOut = () => signOut(auth);

const addToCart = (userUid, data) => {
  return addDoc(collection(db, "shopping-carts", userUid, "cart"), {
    ...data,
    timestamp: serverTimestamp(),
  });
};

const liveCart = (userUid, observer) => {
  const cart = collection(db, "shopping-carts", userUid, "cart");
  onSnapshot(query(cart), observer);
};

const removeFromCart = (userUid, id) =>
  deleteDoc(doc(db, "shopping-carts", userUid, "cart", id));

const getStripeCheckoutUrl = httpsCallable(functions, "getStripeCheckoutUrl");

export {
  signIn,
  googleSignIn,
  signedInUserState,
  passwordReset,
  createUser,
  logOut,
  addToCart,
  liveCart,
  removeFromCart,
  getStripeCheckoutUrl,
};
