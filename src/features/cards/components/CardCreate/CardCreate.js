import React, { useCallback, memo } from "react";
import PropTypes from "prop-types";

import CardCreateForm from "./CardCreateForm";
import { createCard } from "../../actions";
import { useDispatch } from "react-redux";

const CardCreate = ({ columnId }) => {
  const dispatch = useDispatch();
  const createItem = useCallback(
    (name) => dispatch(createCard(name, columnId)),
    [dispatch, columnId]
  );

  return <CardCreateForm onSubmit={createItem} />;
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default memo(CardCreate);
