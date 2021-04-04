import firebase from "firebase/app";

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
