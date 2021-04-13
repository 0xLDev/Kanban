import React, { useCallback, memo } from "react";
import PropTypes from "prop-types";
import { useRouter } from "react-router5";
import { Div, Card } from "@vkontakte/vkui";
import { Icon20DeleteOutline } from "@vkontakte/icons";

import "./ColumnCard.css";
import { deleteCard } from "../../../cards/actions";
import { useDispatch } from "react-redux";
import { pages } from "../../../../router";

const ColumnCard = ({ children, id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => dispatch(deleteCard(id));
  const router = useRouter();
  const gotoCardPage = useCallback(
    () => router.navigate(pages.CARD, { cardId: id }),
    [router, id]
  );

  return (
    <>
      <Card mode="shadow" onClick={gotoCardPage}>
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

export default memo(ColumnCard);
