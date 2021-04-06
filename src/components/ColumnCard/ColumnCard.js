import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Div, Card } from "@vkontakte/vkui";

import "./ColumnCard.css";
import { deleteCard } from "../../actions";
import Context from "../App/context";
import { Icon20DeleteOutline } from "@vkontakte/icons";

const ColumnCard = ({ children, id }) => {
  const { removeCard } = useContext(Context);

  const deleteItem = () => {
    deleteCard(id)
      .then(() => removeCard(id))
      .catch(console.error);
  };
  return (
    <>
      <Card mode="shadow">
        <Div className="ColumnCard__wrapper">
          {children}
          <Icon20DeleteOutline fill={"red"} onClick={deleteItem} />
        </Div>
      </Card>
    </>
  );
};

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ColumnCard;
