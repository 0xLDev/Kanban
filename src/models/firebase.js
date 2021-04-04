import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const initialize = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyCFAo5pYMNJduI8J_lTbrMQ1BirX3gf4Mo",
    authDomain: "kanban-23ca3.firebaseapp.com",
    projectId: "kanban-23ca3",
    storageBucket: "kanban-23ca3.appspot.com",
    messagingSenderId: "875166904949",
    appId: "1:875166904949:web:a9b16de5fc45503aeffe3c",
    measurementId: "G-VEB5G8CP70",
  };
  firebase.initializeApp(firebaseConfig);
};
