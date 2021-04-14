import React, { useCallback, memo } from "react";
import { Div } from "@vkontakte/vkui";
import { useRoute } from "react-router5";

import "../Column/Column.css";
import ColumnCreateForm from "./ColumnCreateForm";
import { createColumn } from "../../actions";
import { useDispatch } from "react-redux";

const ColumnCreate = () => {
  const dispatch = useDispatch();
  const {
    route: {
      params: { boardId },
    },
  } = useRoute();
  const createItem = useCallback(
    (name) => dispatch(createColumn(name, boardId)),
    [boardId, dispatch]
  );

  return (
    <Div className="Column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default memo(ColumnCreate);
