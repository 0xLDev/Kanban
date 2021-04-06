import { useState } from "react";

import { panel } from "./constants";

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

  return { boards, addBoard, removeBoard, setBoards };
};

const useNavState = (boards) => {
  const [activePanel, setActivePanel] = useState(panel.boards);
  const [activeBoard, setActiveBoard] = useState(null);

  const goToColumns = (boardId) => {
    setActiveBoard(boards.find(({ id }) => id === boardId));
    setActivePanel(panel.columns);
  };

  const goToBoards = () => {
    setActivePanel(panel.boards);
  };

  return { activePanel, activeBoard, goToColumns, goToBoards };
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

export const useAppState = () => {
  const boardsState = useBoardsState();
  const columnsState = useColumnsState();
  const navState = useNavState(boardsState.boards);
  const cardsState = useCardsState();

  return {
    ...boardsState,
    ...columnsState,
    ...navState,
    ...cardsState,
  };
};
