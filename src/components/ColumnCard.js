import React from "react";
import PropTypes from "prop-types";
import { Div, Card } from "@vkontakte/vkui";

const ColumnCard = ({ children }) => {
  return (
    <>
      <Card>
        <Div>{children}</Div>
      </Card>
    </>
  );
};

ColumnCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ColumnCard;
