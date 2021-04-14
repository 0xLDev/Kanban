import React, { useCallback, memo } from "react";
import PropTypes from "prop-types";
import { Div, Card, Header, Button, Alert } from "@vkontakte/vkui";
import { Icon16MoreHorizontal } from "@vkontakte/icons";

import "./Column.css";
import Cards from "../../../cards/components/Cards/Cards";
import { deleteColumn, editColumn } from "../../actions";
import { setPopout } from "../../../../app/actions";
import { useDispatch } from "react-redux";

const Column = ({ name, id }) => {
  const dispatch = useDispatch();
  const deleteItem = useCallback(() => {
    dispatch(deleteColumn(id));
  }, [dispatch, id]);

  const editItem = useCallback(() => {
    const newName = prompt("Введите название колонки", name);

    if (typeof newName !== "string" || !newName.trim().length) {
      return;
    }

    dispatch(editColumn(id, newName));
  }, [dispatch, id, name]);

  const showColumnOptions = useCallback(() => {
    dispatch(
      setPopout(
        <Alert
          actions={[
            {
              title: "Редактировать",
              autoclose: true,
              action: editItem,
            },
            {
              title: "Удалить",
              autoclose: true,
              mode: "destructive",
              action: deleteItem,
            },
            {
              title: "Отмена",
              autoclose: true,
              mode: "cancel",
            },
          ]}
          actionsLayout="vertical"
          onClose={() => dispatch(setPopout(null))}
          header="Подтвердите действие"
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
