import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Card, Div, Button } from "@vkontakte/vkui";

import "./BoardsItem.css";
import { deleteBoard } from "../../actions/index";
import Context from "../App/context";

const BoardsItem = ({ id, children }) => {
  const { removeBoard, goToColumns } = useContext(Context);
  const goToColumnPanel = () => goToColumns(id);
  const deleteItem = (event) => {
    event.stopPropagation();
    deleteBoard(id)
      .then(() => removeBoard(id))
      .catch(console.error);
  };

  return (
    <Card onClick={goToColumnPanel}>
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default BoardsItem;
