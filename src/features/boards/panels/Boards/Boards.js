import React from "react";
import { PanelHeaderSimple, Div } from "@vkontakte/vkui";

import BoardsList from "../../components/BoardsList/BoardsList";
import BoardsCreate from "../../components/BoardsCreate/BoardsCreate";

const Boards = () => {
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

export default Boards;
