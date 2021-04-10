import React, { useEffect } from "react";
import { CardGrid } from "@vkontakte/vkui";
import { useSelector, useDispatch } from "react-redux";

import BoardsItem from "../BoardsItem/BoardsItem";
import { fetchBoards } from "../../actions/actions";

const BoardsList = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);

  // Запрос в базу данных за досками
  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

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
