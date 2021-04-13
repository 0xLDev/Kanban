import React, { useMemo, useCallback, memo } from "react";
import { Div } from "@vkontakte/vkui";
import { useRoute } from "react-router5";

import "../Column/Column.css";
import ColumnCreateForm from "./ColumnCreateForm";
import { createColumn } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../../../boards/selectors";

const ColumnCreate = () => {
  const dispatch = useDispatch();
  const boards = useSelector(getBoards);
  const {
    route: {
      params: { boardId },
    },
  } = useRoute();
  const board = useMemo(() => boards.find(({ id }) => id === boardId) || {}, [
    boardId,
    boards,
  ]);

  const createItem = useCallback(
    (name) => dispatch(createColumn(name, board.id)),
    [board, dispatch]
  );

  return (
    <Div className="Column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default memo(ColumnCreate);
