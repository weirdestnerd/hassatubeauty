import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { initializeApp } from "firebase/app";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn6yBGJfpnm6tbVwv-j79V19GLrd6cKqA",
  authDomain: "hassatubeauty.firebaseapp.com",
  projectId: "hassatubeauty",
  storageBucket: "hassatubeauty.appspot.com",
  messagingSenderId: "683010890895",
  appId: "1:683010890895:web:0b07f04b0fec0b80f0a4fa",
  measurementId: "G-681HCMYMKR",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// Setup Analytics
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
