import { useState, useEffect } from "react";
import { getBoards } from "../../actions";

const useColumnsState = () => {
  const [columns, setColumns] = useState([]);
  const addColumn = (column) => {
    setColumns([...columns, column]);
  };
  const removeColumn = (removeId) => {
    setColumns(columns.filter(({ id }) => id !== removeId));
  };

  return { columns, addColumn, removeColumn, setColumns };
};

const useBoardsState = () => {
  const [boards, setBoards] = useState([]);
  const addBoard = (board) => setBoards([...boards, board]);
  const removeBoard = (removeId) =>
    setBoards(boards.filter(({ id }) => id !== removeId));

  // Запрос в базу данных за досками
  useEffect(() => {
    getBoards().then(setBoards);
  }, []);

  return { boards, addBoard, removeBoard, setBoards };
};

const useNavState = () => {
  const [activePanel, setActivePanel] = useState(null);

  const changeRoute = ({ route }) => {
    setActivePanel(route.name);
  };

  return { activePanel, changeRoute };
};

const useCardsState = () => {
  const [cards, setCards] = useState([]);
  const addCards = (card) => {
    setCards([...cards, card]);
  };

  const removeCard = (removeId) => {
    setCards(cards.filter(({ id }) => id !== removeId));
  };

  return { cards, setCards, addCards, removeCard };
};

const usePopoutState = () => {
  const [popout, setPopout] = useState(null);

  return { popout, setPopout };
};

export const useAppState = () => {
  const boardsState = useBoardsState();
  const columnsState = useColumnsState();
  const navState = useNavState();
  const cardsState = useCardsState();
  const popoutState = usePopoutState();

  return {
    ...boardsState,
    ...columnsState,
    ...navState,
    ...cardsState,
    ...popoutState,
  };
};
