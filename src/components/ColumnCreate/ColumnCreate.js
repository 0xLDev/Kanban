import React from "react";
import { Div } from "@vkontakte/vkui";
import { useRoute } from "react-router5";

import "../Column/Column.css";
import ColumnCreateForm from "./ColumnCreateForm";
import { createColumn } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

const ColumnCreate = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const {
    route: {
      params: { boardId },
    },
  } = useRoute();
  const board = boards.find(({ id }) => id === boardId) || {};

  const createItem = (name) => dispatch(createColumn(name, board.id));

  return (
    <Div className="Column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default ColumnCreate;
