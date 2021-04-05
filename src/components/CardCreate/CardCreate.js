import React, { useContext } from "react";
import PropTypes from "prop-types";

import CreateForm from "../CreateForm/CreateForm";
import { createCard } from "../../actions";
import Context from "../App/context";

const CardCreate = ({ columnId }) => {
  const { addCards } = useContext(Context);
  const createItem = (name) => {
    return createCard(name, columnId)
      .then((doc) =>
        addCards({
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
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
