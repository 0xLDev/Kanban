import React from "react";
import PropTypes from "prop-types";
import { Div, Card, Button } from "@vkontakte/vkui";

import "./ColumnCard.css";
import { deleteCard } from "../../actions";

const ColumnCard = ({ children, id, onDelete }) => {
  const deleteItem = () => {
    deleteCard(id)
      .then(() => onDelete(id))
      .catch(console.error);
  };
  return (
    <>
      <Card>
        <Div className="ColumnCard__wrapper">
          {children}
          <Button mode="destructive" onClick={deleteItem}>
            Удалить
          </Button>
        </Div>
      </Card>
    </>
  );
};

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ColumnCard;
