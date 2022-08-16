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
  updateDoc,
  query,
  doc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  where,
  getDocs,
  writeBatch,
  getDoc,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import rn from "random-number";

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
    active: true,
    timestamp: serverTimestamp(),
  });
};

const liveCart = (userUid, observer) => {
  const cart = collection(db, "shopping-carts", userUid, "cart");
  onSnapshot(query(cart, where("active", "==", true)), observer);
};

const removeFromCart = (userUid, id) =>
  deleteDoc(doc(db, "shopping-carts", userUid, "cart", id));

const makeExistingOrdersInactive = async (userUid) => {
  const batch = writeBatch(db);
  const orders = collection(db, "orders", userUid, "orders");
  const q = query(orders, where("active", "==", true));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((queryDoc) => {
    const docRef = doc(db, "orders", userUid, "orders", queryDoc.id);
    batch.update(docRef, { active: false });
  });

  await batch.commit();
};

const createNewOrder = async (userUid, data) => {
  await makeExistingOrdersInactive(userUid);
  const batch = writeBatch(db);
  data.cart.forEach((cartId) => {
    const docRef = doc(db, "shopping-carts", userUid, "cart", cartId);
    batch.update(docRef, { active: false });
  });

  await batch.commit();

  return addDoc(collection(db, "orders", userUid, "orders"), {
    sessionId: data.sessionId,
    cart: data.cart,
    orderId: rn({
      min: 10000,
      max: 10000000,
      integer: true,
    }),
    active: true,
    timestamp: serverTimestamp(),
  });
};

const getActiveOrders = async (userUid) => {
  const orders = collection(db, "orders", userUid, "orders");
  const q = query(orders, where("active", "==", true));
  return getDocs(q);
};

const getCartProducts = (userUid, cartIds) => {
  const products = [];
  cartIds.forEach(async (cartId) => {
    const docRef = doc(db, "shopping-carts", userUid, "cart", cartId);
    const docSnap = await getDoc(docRef);
    products.push(docSnap.data());
  });
  return products;
};

const getInventory = async (type) => {
  const products = [];
  const querySnapshot = await getDocs(collection(db, type));
  querySnapshot.forEach((docSnap) => {
    products.push({ id: docSnap.id, ...docSnap.data(), type });
  });
  return products;
};

const getInventoryProduct = async (id, type) => {
  const docRef = doc(db, type, id);
  const docSnap = await getDoc(docRef);

  return { ...docSnap.data(), id: docSnap.id, type };
};

const updateInventoryProduct = (product, data) => {
  const docRef = doc(db, product.type, product.id);

  return updateDoc(docRef, {
    ...product,
    ...data,
    timestamp: serverTimestamp(),
  });
};

const addInventoryProduct = (data) => {
  return addDoc(collection(db, data.type), {
    ...data,
    timestamp: serverTimestamp(),
  });
};

const getProduct = async (id, type) => {
  const docRef = doc(db, type, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return { ...docSnap.data(), id: docSnap.id, type };

  const q = query(collection(db, type), where("key", "==", id));

  let result = null;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((qDoc) => {
    if (!result) result = { ...qDoc.data(), id: qDoc.id, type };
  });

  return result;
};

const getAllProducts = async (type) => {
  const q = query(collection(db, type), where("show", "==", true));
  const querySnapshot = await getDocs(q);
  const result = {};
  querySnapshot.forEach((qDoc) => {
    result[qDoc.id] = { ...qDoc.data(), id: qDoc.id, type };
  });

  return result;
};

const getStripeCheckoutUrl = httpsCallable(functions, "getStripeCheckoutUrl");
const getSession = httpsCallable(functions, "getSession");

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
  createNewOrder,
  makeExistingOrdersInactive,
  getActiveOrders,
  getCartProducts,
  getInventory,
  getInventoryProduct,
  updateInventoryProduct,
  addInventoryProduct,
  getProduct,
  getAllProducts,
  getSession,
  getStripeCheckoutUrl,
};
