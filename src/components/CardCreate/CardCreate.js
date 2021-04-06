import React, { useContext } from "react";
import PropTypes from "prop-types";

import CardCreateForm from "../CardCreate/CardCreateForm";
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

  return <CardCreateForm onSubmit={createItem} />;
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
