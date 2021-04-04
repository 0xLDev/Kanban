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

export const createBoard = (name) => {
  const db = firebase.firestore();

  return db
    .collection("boards")
    .add({ name })
    .then((docRef) => docRef.get());
};

export const getBoards = () => {
  const db = firebase.firestore();

  return db
    .collection("boards")
    .get()
    .then((querySnapshot) => {
      const boards = [];

      querySnapshot.forEach((doc) => {
        boards.push({
          id: doc.id,
          name: doc.data().name,
        });
      });

      return boards;
    });
};

export const deleteBoard = (id) => {
  const db = firebase.firestore();

  return db.collection("boards").doc(id).delete();
};

export const getColumns = (boardId) => {
  const db = firebase.firestore();

  return db
    .collection("columns")
    .where("boardId", "==", boardId)
    .get()
    .then((querySnapshot) => {
      const columns = [];

      querySnapshot.forEach((doc) => {
        const { boardId, name } = doc.data();
        columns.push({
          id: doc.id,
          boardId,
          name,
        });
      });

      return columns;
    });
};

export const deleteColumn = (id) => {
  const db = firebase.firestore();

  return db.collection("columns").doc(id).delete();
};

export const getCards = (columnId) => {
  const db = firebase.firestore();

  return db
    .collection("cards")
    .where("columnId", "==", columnId)
    .get()
    .then((querySnapshot) => {
      const cards = [];

      querySnapshot.forEach((doc) => {
        const { columnId, name } = doc.data();
        cards.push({
          id: doc.id,
          columnId,
          name,
        });
      });

      return cards;
    });
};

export const deleteCard = (id) => {
  const db = firebase.firestore();

  return db.collection("cards").doc(id).delete();
};

export const createCard = (name, columnId) => {
  const db = firebase.firestore();

  return db
    .collection("cards")
    .add({ name, columnId })
    .then((docRef) => docRef.get());
};

export const createColumn = (name, boardId) => {
  const db = firebase.firestore();

  return db
    .collection("columns")
    .add({ name, boardId })
    .then((docRef) => docRef.get());
};
