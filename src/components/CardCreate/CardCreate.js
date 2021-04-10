import React from "react";
import PropTypes from "prop-types";

import CardCreateForm from "../CardCreate/CardCreateForm";
import { createCard } from "../../actions/actions";
import { useDispatch } from "react-redux";

const CardCreate = ({ columnId }) => {
  const dispatch = useDispatch();
  const createItem = (name) => dispatch(createCard(name, columnId));

  return <CardCreateForm onSubmit={createItem} />;
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
