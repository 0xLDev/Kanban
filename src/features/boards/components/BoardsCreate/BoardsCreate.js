import React, { useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { createBoard } from "../../actions";

import CreateForm from "../../../../components/CreateForm/CreateForm";

const BoardEdit = () => {
  const dispatch = useDispatch();

  const createItem = useCallback((name) => dispatch(createBoard(name)), [
    dispatch,
  ]);

  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Введите название доски"
      actionTitle="Создать доску"
    />
  );
};

export default memo(BoardEdit);
