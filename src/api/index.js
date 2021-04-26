import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const initialize = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyDxAVVKv0sDW3qnGvhdRsqmjGzFwKtfOz4",
    authDomain: "kanbanbackend.firebaseapp.com",
    projectId: "kanbanbackend",
    storageBucket: "kanbanbackend.appspot.com",
    messagingSenderId: "1043149882942",
    appId: "1:1043149882942:web:aec5f3db8c5043d61a736f",
    measurementId: "G-NVQFJ0V59B",
  };
  firebase.initializeApp(firebaseConfig);
};

const createBoard = (name) => {
  const db = firebase.firestore();

  return db
    .collection("boards")
    .add({ name })
    .then((docRef) => docRef.get());
};

const editBoard = (id, name) => {
  const db = firebase.firestore();

  return db.collection("boards").doc(id).update({ name });
};

const getBoards = () => {
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

const deleteBoard = (id) => {
  const db = firebase.firestore();

  return db.collection("boards").doc(id).delete();
};

const getColumns = (boardId) => {
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

const editColumn = (id, name) => {
  const db = firebase.firestore();

  return db.collection("columns").doc(id).update({ name });
};

const deleteColumn = (id) => {
  const db = firebase.firestore();

  return db.collection("columns").doc(id).delete();
};

const getCards = (columnId) => {
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

const getCard = (cardId) => {
  const db = firebase.firestore();

  return db
    .collection("cards")
    .doc(cardId)
    .get()
    .then((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
};

const editCard = (id, data = {}) => {
  const db = firebase.firestore();

  return db.collection("cards").doc(id).update(data);
};

const deleteCard = (id) => {
  const db = firebase.firestore();

  return db.collection("cards").doc(id).delete();
};

const createCard = (name, columnId) => {
  const db = firebase.firestore();

  return db
    .collection("cards")
    .add({ name, columnId })
    .then((docRef) => docRef.get());
};

const createColumn = (name, boardId) => {
  const db = firebase.firestore();

  return db
    .collection("columns")
    .add({ name, boardId })
    .then((docRef) => docRef.get());
};

export const api = {
  createBoard,
  editBoard,
  getBoards,
  deleteBoard,
  getColumns,
  editColumn,
  deleteColumn,
  getCards,
  getCard,
  editCard,
  deleteCard,
  createCard,
  createColumn,
};
