import React from "react";
import { useDispatch } from "react-redux";
import { createBoard } from "../../actions";

import CreateForm from "../CreateForm/CreateForm";

const BoardsCreate = () => {
  const dispatch = useDispatch();

  const createItem = (name) => dispatch(createBoard(name));

  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Введите название доски"
      actionTitle="Создать доску"
    />
  );
};

export default BoardsCreate;
