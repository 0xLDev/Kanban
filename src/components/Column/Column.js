import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Div, Card, Header, Button, Alert } from "@vkontakte/vkui";
import { Icon16MoreHorizontal, Icon28DeleteOutline } from "@vkontakte/icons";

import "./Column.css";
import Cards from "../Cards/Cards";
import { deleteColumn } from "../../actions";
import Context from "../App/context";

const Column = ({ name, id }) => {
  const { removeColumn, setPopout } = useContext(Context);

  const deleteItem = () => {
    deleteColumn(id)
      .then(() => removeColumn(id))
      .catch(console.error);
  };

  const showColumnOptions = () => {
    const close = () => setPopout(null);

    setPopout(
      <Alert
        actions={[
          {
            title: "Отмена",
            autoclose: true,
            mode: "cancel",
          },
          {
            title: "Удалить",
            autoclose: true,
            mode: "destructive",
            action: deleteItem,
          },
        ]}
        actionsLayout="horizontal"
        onClose={close}
        header="Удаление колонки"
        text="Вы уверены, что хотите удалить эту колонку?"
      />
    );
  };

  return (
    <Div className="Column">
      <div className="Column__header">
        <Header className="Column__title">{name}</Header>

        <Button
          mode="overlay_outline"
          className="Column__headerButton"
          onClick={showColumnOptions}
        >
          <Icon16MoreHorizontal />
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
