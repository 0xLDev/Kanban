import React from "react";
import PropTypes from "prop-types";
import { Div } from "@vkontakte/vkui";

import "./Column.css";
import CreateForm from "../CreateForm/CreateForm";
import { createColumn } from "../../actions";

const ColumnCreate = ({ onCreate, boardId }) => {
  const createItem = (name) => {
    return createColumn(name, boardId)
      .then((doc) =>
        onCreate({
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

ColumnCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  boardId: PropTypes.string.isRequired,
};

export default ColumnCreate;
