import React from "react";
import PropTypes from "prop-types";
import { Div, Card } from "@vkontakte/vkui";
import { Icon20DeleteOutline } from "@vkontakte/icons";

import "./ColumnCard.css";
import { deleteCard } from "../../actions";
import { removeCard } from "../../actions/actions";
import { useDispatch } from "react-redux";

const ColumnCard = ({ children, id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    deleteCard(id)
      .then(() => dispatch(removeCard(id)))
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
