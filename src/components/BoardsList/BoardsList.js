import React, { useContext } from "react";
import { CardGrid } from "@vkontakte/vkui";

import BoardsItem from "../BoardsItem/BoardsItem";
import Context from "../App/context";

const BoardsList = () => {
  const { boards } = useContext(Context);

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
