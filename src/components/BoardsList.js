import { CardGrid } from "@vkontakte/vkui";
import React, { useState, useEffect } from "react";
import BoardsItem from "./BoardsItem";
import firebase from "firebase/app";

const BoardsList = () => {
  const [boards, setBoards] = useState([]);

  // Запрос в базу данных за досками
  useEffect(() => {
    const db = firebase.firestore();

    db.collection("boards")
      .get()
      .then((querySnapshot) => {
        const boards = [];

        querySnapshot.forEach((doc) => {
          boards.push({
            id: doc.id,
            name: doc.data().name,
          });
        });

        setBoards(boards);
      });
  }, []);

  if (!boards.length) {
    return null;
  }

  return (
    <CardGrid size="l">
      {boards.map(({ name }) => (
        <BoardsItem key={name}>{name}</BoardsItem>
      ))}
    </CardGrid>
  );
};

export default BoardsList;
