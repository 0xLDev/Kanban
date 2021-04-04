import React from "react";
import PropTypes from "prop-types";
import { createBoard } from "../../actions";

import CreateForm from "../CreateForm/CreateForm";

const BoardsCreate = ({ onCreate }) => {
  const createBoards = (name) => {
    return createBoard(name)
      .then((doc) =>
        onCreate({
          id: doc.id,
          ...doc.data(),
        })
      )
      .catch(console.error);
  };

  return (
    <CreateForm
      onSubmit={createBoards}
      placeholder="Введите название доски"
      actionTitle="Создать доску"
    />
  );
};

BoardsCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default BoardsCreate;
