import React from "react";
import PropTypes from "prop-types";
import { Card, Div } from "@vkontakte/vkui";

const BoardsItem = ({ children }) => {
  return (
    <Card>
      <Div>{children}</Div>
    </Card>
  );
};

BoardsItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default BoardsItem;
