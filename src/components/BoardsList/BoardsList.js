import React, { useEffect } from "react";
import { CardGrid } from "@vkontakte/vkui";

import BoardsItem from "../BoardsItem/BoardsItem";
import { getBoards } from "../../actions";
import { setBoards } from "../../actions/actions";
import { useSelector, useDispatch } from "react-redux";

const BoardsList = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);

  // Запрос в базу данных за досками
  useEffect(() => {
    getBoards().then((boards) => dispatch(setBoards(boards)));
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
