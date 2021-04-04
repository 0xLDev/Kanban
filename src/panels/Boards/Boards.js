import React, { useState } from "react";
import PropTypes from "prop-types";
import { PanelHeaderSimple, Div } from "@vkontakte/vkui";
import BoardsList from "../../components/BoardsList/BoardsList";
import BoardsCreate from "../../components/BoardsCreate/BoardsCreate";

const Boards = ({ onChangePanel }) => {
  const [boards, setBoards] = useState([]);

  const addBoard = (board) => {
    setBoards([...boards, board]);
  };

  const removeBoards = (removeId) => {
    setBoards(boards.filter(({ id }) => id !== removeId));
  };

  return (
    <>
      <PanelHeaderSimple>Мои доски</PanelHeaderSimple>
      <Div>
        <BoardsCreate onCreate={addBoard} />
      </Div>
      <BoardsList
        boards={boards}
        onDelete={removeBoards}
        onLoadBoards={setBoards}
        onBoardsClick={onChangePanel}
      />
    </>
  );
};

Boards.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Boards;
