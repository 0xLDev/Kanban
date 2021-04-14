import React, { useCallback, memo, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "react-router5";
import { Card, Div, Button, Alert } from "@vkontakte/vkui";

import { Icon16MoreHorizontal } from "@vkontakte/icons";

import "./BoardsItem.css";
import { pages } from "../../../../router";
import { deleteBoard } from "../../actions";
import { useDispatch } from "react-redux";
import { setPopout } from "../../../../app/actions";
import BoardEdit from "../BoardEdit/BoardEdit";

const BoardsItem = ({ id, children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isEditableState, setEditableState] = useState(false);
  const goToColumnPanel = useCallback(
    () => router.navigate(pages.COLUMNS, { boardId: id }),
    [router, id]
  );

  const deleteItem = useCallback(() => {
    dispatch(deleteBoard(id));
  }, [dispatch, id]);

  const editItem = useCallback(() => {
    setEditableState(true);
  }, []);

  const onEditBoard = useCallback(() => {
    setEditableState(false);
  }, []);

  const showBoardOptions = useCallback(
    (event) => {
      event.stopPropagation();

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
              },
            ]}
            actionsLayout="vertical"
            onClose={() => dispatch(setPopout(null))}
            header="Подтвердите действие"
          />
        )
      );
    },
    [dispatch, deleteItem]
  );

  if (isEditableState) {
    return <BoardEdit id={id} name={children} onSubmit={onEditBoard} />;
  }

  return (
    <Card onClick={goToColumnPanel}>
      <Div className="BoardsItem_content">
        {children}
        <Button
          mode="outline"
          onClick={showBoardOptions}
          className="BoardsItem__button"
        >
          <Icon16MoreHorizontal />
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

export default memo(BoardsItem);
