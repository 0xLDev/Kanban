import React, { useContext } from "react";
import { Div } from "@vkontakte/vkui";
import { useRoute } from "react-router5";

import "../Column/Column.css";
import ColumnCreateForm from "./ColumnCreateForm";
import { createColumn } from "../../actions";
import Context from "../App/context";

const ColumnCreate = () => {
  const { boards, addColumn } = useContext(Context);
  const {
    route: {
      params: { boardId },
    },
  } = useRoute();
  const board = boards.find(({ id }) => id === boardId) || {};

  const createItem = (name) => {
    return createColumn(name, board.id)
      .then((doc) =>
        addColumn({
          id: doc.id,
          ...doc.data(),
        })
      )
      .catch(console.error);
  };

  return (
    <Div className="Column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default ColumnCreate;
