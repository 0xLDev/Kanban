import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CardGrid } from "@vkontakte/vkui";

import ColumnCard from "../ColumnCard/ColumnCard";
import CardCreate from "../CardCreate/CardCreate";
import { getCards } from "../../actions";

const Cards = ({ columnId }) => {
  const [cards, setCards] = useState([]);
  const addCards = (card) => {
    setCards([...cards, card]);
  };

  const removeCard = (removeId) => {
    setCards(cards.filter(({ id }) => id !== removeId));
  };

  // Запрос в базу данных за карточками
  useEffect(() => {
    getCards(columnId).then(setCards);
  }, []);

  return (
    <CardGrid size="l">
      {cards.map(({ id, name }) => (
        <ColumnCard key={id} id={id} onDelete={removeCard}>
          {name}
        </ColumnCard>
      ))}
      <CardCreate onCreate={addCards} columnId={columnId} />
    </CardGrid>
  );
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default Cards;
