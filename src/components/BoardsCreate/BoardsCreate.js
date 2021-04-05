import React, { useContext } from "react";
import { createBoard } from "../../actions";
import Context from "../App/context";

import CreateForm from "../CreateForm/CreateForm";

const BoardsCreate = () => {
  const { addBoard } = useContext(Context);

  const createItem = (name) => {
    return createBoard(name)
      .then((doc) =>
        addBoard({
          id: doc.id,
          ...doc.data(),
        })
      )
      .catch(console.error);
  };

  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Введите название доски"
      actionTitle="Создать доску"
    />
  );
};

export default BoardsCreate;
