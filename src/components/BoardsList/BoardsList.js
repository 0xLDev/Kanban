import React, { useEffect, useContext } from "react";
import { CardGrid } from "@vkontakte/vkui";

import { getBoards } from "../../actions";
import BoardsItem from "../BoardsItem/BoardsItem";
import Context from "../App/context";

const BoardsList = () => {
  const { setBoards, boards } = useContext(Context);

  // Запрос в базу данных за досками
  useEffect(() => {
    getBoards().then(setBoards);
  }, []);

  if (!boards.length) {
    return null;
  }

  return (
    <CardGrid size="l">
      {boards.map(({ id, name }) => (
        <BoardsItem key={id} id={id}>
          {name}
        </BoardsItem>
      ))}
    </CardGrid>
  );
};

export default BoardsList;
