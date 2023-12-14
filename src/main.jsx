import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA1SHDcPVOia_mCNM10PxfWwa42TRJI05o",
  authDomain: "chat-app-da671.firebaseapp.com",
  databaseURL: "https://chat-app-da671-default-rtdb.firebaseio.com",
  projectId: "chat-app-da671",
  storageBucket: "chat-app-da671.appspot.com",
  messagingSenderId: "992333856208",
  appId: "1:992333856208:web:031a0ea2adfbf9118ccdd5"
};
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
