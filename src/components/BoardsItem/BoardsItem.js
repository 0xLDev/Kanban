import React from "react";
import PropTypes from "prop-types";
import { Card, Div, Button } from "@vkontakte/vkui";

import "./BoardsItem.css";
import { deleteBoard } from "../../actions/index";

const BoardsItem = ({ id, children, onDelete, onClick }) => {
  const deleteItem = () => {
    deleteBoard(id)
      .then(() => onDelete(id))
      .catch(console.error);
  };

  return (
    <Card onClick={onClick}>
      <Div className="BoardsItem_content">
        {children}
        <Button mode="destructive" onClick={deleteItem}>
          Удалить
        </Button>
      </Div>
    </Card>
  );
};

BoardsItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BoardsItem;
