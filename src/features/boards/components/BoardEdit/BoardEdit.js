import React, { useCallback, memo } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { editBoard } from "../../actions";

import CreateForm from "../../../../components/CreateForm/CreateForm";
import { modes } from "../../../../components/CreateForm/hooks";

const BoardEdit = ({ id, name, onSubmit }) => {
  const dispatch = useDispatch();

  const editItem = useCallback(
    (name) => dispatch(editBoard(id, name)).finally(onSubmit),
    [dispatch, id]
  );

  return (
    <CreateForm
      onSubmit={editItem}
      placeholder="Введите название доски"
      actionTitle="Изменить"
      initialValue={name}
      initialMode={modes.form}
      onCancel={onSubmit}
    />
  );
};

BoardEdit.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default memo(BoardEdit);
