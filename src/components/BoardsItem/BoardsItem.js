import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "react-router5";
import { Card, Div } from "@vkontakte/vkui";

import { Icon20DeleteOutlineAndroid } from "@vkontakte/icons";

import "./BoardsItem.css";
import { pages } from "../../router";
import { deleteBoard } from "../../actions";
import { useDispatch } from "react-redux";

const BoardsItem = ({ id, children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const goToColumnPanel = () => router.navigate(pages.COLUMNS, { boardId: id });
  const deleteItem = (event) => {
    event.stopPropagation();

    dispatch(deleteBoard(id));
  };

  return (
    <Card onClick={goToColumnPanel}>
      <Div className="BoardsItem_content">
        {children}
        <Icon20DeleteOutlineAndroid onClick={deleteItem} fill={"red"} />
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
