import React, { useCallback, memo } from "react";
import PropTypes from "prop-types";
import { Div, Card, Header, Button, Alert } from "@vkontakte/vkui";
import { Icon16MoreHorizontal } from "@vkontakte/icons";

import "./Column.css";
import Cards from "../../../cards/components/Cards/Cards";
import { deleteColumn } from "../../actions";
import { setPopout } from "../../../../app/actions";
import { useDispatch } from "react-redux";

const Column = ({ name, id }) => {
  const dispatch = useDispatch();
  const deleteItem = useCallback(() => {
    dispatch(deleteColumn(id));
  }, [dispatch, id]);

  const showColumnOptions = useCallback(() => {
    dispatch(
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
          onClose={() => dispatch(setPopout(null))}
          header="Удаление колонки"
          text="Вы уверены, что хотите удалить эту колонку?"
        />
      )
    );
  }, [dispatch, deleteItem]);

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

export default memo(Column);
