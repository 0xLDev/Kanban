import React from "react";
import { useDispatch } from "react-redux";
import { createBoard } from "../../api";
import { addBoard } from "../../actions/actions";

import CreateForm from "../CreateForm/CreateForm";

const BoardsCreate = () => {
  const dispatch = useDispatch();

  const createItem = (name) => {
    return createBoard(name)
      .then((doc) =>
        dispatch(
          addBoard({
            id: doc.id,
            ...doc.data(),
          })
        )
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
