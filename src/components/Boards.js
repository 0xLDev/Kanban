import React from "react";
import PropTypes from "prop-types";
import { PanelHeaderSimple, Div } from "@vkontakte/vkui";

import BoardsList from "./BoardsList";
import BoardsCreate from "./BoardsCreate";

const Boards = ({ onChangePanel }) => {
  return (
    <>
      <PanelHeaderSimple>Мои доски</PanelHeaderSimple>
      <Div>
        <BoardsCreate />
      </Div>
      <BoardsList />
    </>
  );
};

Boards.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Boards;
