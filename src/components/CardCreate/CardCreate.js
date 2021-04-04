import React from "react";
import PropTypes from "prop-types";

import CreateForm from "../CreateForm/CreateForm";
import { createCard } from "../../actions";

const CardCreate = ({ onCreate, columnId }) => {
  const createItem = (name) => {
    return createCard(name, columnId)
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
      onSubmit={createItem}
      placeholder="Введите название карточки"
      actionTitle="Создать карточку"
    />
  );
};

CardCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
