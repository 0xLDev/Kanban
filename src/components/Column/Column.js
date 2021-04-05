import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Div, Card, Header, Button } from "@vkontakte/vkui";

import "./Column.css";
import Cards from "../Cards/Cards";
import { deleteColumn } from "../../actions";
import Context from "../App/context";

const Column = ({ name, id }) => {
  const { removeColumn } = useContext(Context);

  const deleteItem = () => {
    deleteColumn(id)
      .then(() => removeColumn(id))
      .catch(console.error);
  };

  return (
    <Div className="Column">
      <div className="Column__header">
        <Header>{name}</Header>
        <Button mode="destructive" onClick={deleteItem}>
          Удалить
        </Button>
      </div>

      <Card className="Column__wrapper">
        <Cards columnId={id} />
      </Card>
    </Div>
  );
};

Column.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Column;
