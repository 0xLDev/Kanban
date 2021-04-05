import React, { useContext } from "react";
import { Div } from "@vkontakte/vkui";

import "./Column.css";
import CreateForm from "../CreateForm/CreateForm";
import { createColumn } from "../../actions";
import Context from "../App/context";

const ColumnCreate = () => {
  const { addColumn, activeBoard } = useContext(Context);
  const createItem = (name) => {
    return createColumn(name, activeBoard.id)
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
      <CreateForm
        onSubmit={createItem}
        placeholder="Введите название колонки"
        actionTitle="Создать колонку"
      />
    </Div>
  );
};

export default ColumnCreate;
