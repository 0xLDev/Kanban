import React from "react";
import PropTypes from "prop-types";
import { Card, Div, Button } from "@vkontakte/vkui";
import "./BoardsItem.css";
import firebase from "firebase/app";

const BoardsItem = ({ id, children, onDelete }) => {
  const deleteItem = () => {
    const db = firebase.firestore();

    db.collection("boards")
      .doc(id)
      .delete()
      .then(() => onDelete(id))
      .catch(console.error);

    onDelete(id);
  };

  return (
    <Card>
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
};

export default BoardsItem;
