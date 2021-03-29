import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";

import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

import App from "./components/App";

var firebaseConfig = {
  apiKey: "AIzaSyCFAo5pYMNJduI8J_lTbrMQ1BirX3gf4Mo",
  authDomain: "kanban-23ca3.firebaseapp.com",
  projectId: "kanban-23ca3",
  storageBucket: "kanban-23ca3.appspot.com",
  messagingSenderId: "875166904949",
  appId: "1:875166904949:web:a9b16de5fc45503aeffe3c",
  measurementId: "G-VEB5G8CP70",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// // Init VK  Mini App
// bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
