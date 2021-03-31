import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { CardGrid } from "@vkontakte/vkui";
import firebase from "firebase/app";

import BoardsItem from "../BoardsItem/BoardsItem";

const BoardsList = ({ boards, onDelete, onLoadBoards }) => {
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

        onLoadBoards(boards);
      });
  }, []);

  if (!boards.length) {
    return null;
  }

  return (
    <CardGrid size="l">
      {boards.map(({ id, name }) => (
        <BoardsItem onDelete={onDelete} key={id} id={id}>
          {name}
        </BoardsItem>
      ))}
    </CardGrid>
  );
};

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onLoadBoards: PropTypes.func.isRequired,
};

export default BoardsList;
