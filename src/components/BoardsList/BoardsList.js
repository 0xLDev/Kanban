import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { CardGrid } from "@vkontakte/vkui";

import { getBoards } from "../../actions";
import BoardsItem from "../BoardsItem/BoardsItem";

const BoardsList = ({ boards, onDelete, onLoadBoards, onBoardsClick }) => {
  // Запрос в базу данных за досками
  useEffect(() => {
    getBoards().then(onLoadBoards);
  }, []);

  if (!boards.length) {
    return null;
  }

  return (
    <CardGrid size="l">
      {boards.map(({ id, name }) => (
        <BoardsItem
          onDelete={onDelete}
          key={id}
          id={id}
          onClick={() => onBoardsClick(id)}
        >
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
  onBoardsClick: PropTypes.func.isRequired,
};

export default BoardsList;
