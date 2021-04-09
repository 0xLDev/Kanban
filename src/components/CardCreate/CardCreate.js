import React from "react";
import PropTypes from "prop-types";

import CardCreateForm from "../CardCreate/CardCreateForm";
import { createCard } from "../../api";
import { addCards } from "../../actions/actions";
import { useDispatch } from "react-redux";

const CardCreate = ({ columnId }) => {
  const dispatch = useDispatch();
  const createItem = (name) => {
    return createCard(name, columnId)
      .then((doc) =>
        dispatch(
          addCards({
            id: doc.id,
            ...doc.data(),
          })
        )
      )
      .catch(console.error);
  };

  return <CardCreateForm onSubmit={createItem} />;
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
