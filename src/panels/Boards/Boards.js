import React from "react";
import PropTypes from "prop-types";
import { PanelHeaderSimple, Div } from "@vkontakte/vkui";

import BoardsList from "../../components/BoardsList/BoardsList";
import BoardsCreate from "../../components/BoardsCreate/BoardsCreate";

const Boards = ({ onChangePanel, addBoard, removeBoard, setBoards, boards }) => {

  return (
    <>
      <PanelHeaderSimple>Мои доски</PanelHeaderSimple>
      <Div>
        <BoardsCreate onCreate={addBoard} />
      </Div>
      <BoardsList
        boards={boards}
        onDelete={removeBoard}
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
