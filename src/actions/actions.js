import * as actionType from "./types";

export const addColumn = (column) => ({
  type: actionType.ADD_COLUMN,
  payload: { column },
});

export const removeColumn = (removeId) => ({
  type: actionType.REMOVE_COLUMN,
  payload: { removeId },
});

export const setColumns = (columns) => ({
  type: actionType.SET_COLUMNS,
  payload: { columns },
});

export const addBoard = (board) => ({
  type: actionType.ADD_BOARD,
  payload: { board },
});

export const removeBoard = (removeId) => ({
  type: actionType.REMOVE_BOARD,
  payload: { removeId },
});

export const setBoards = (boards) => ({
  type: actionType.SET_BOARDS,
  payload: { boards },
});

export const setActivePanel = (panel) => ({
  type: actionType.SET_ACTIVE_PANEL,
  payload: { panel },
});

export const addCards = (card) => ({
  type: actionType.ADD_CARDS,
  payload: { card },
});

export const removeCard = (removeId) => ({
  type: actionType.REMOVE_CARD,
  payload: { removeId },
});

export const setCards = (cards) => ({
  type: actionType.SET_CARDS,
  payload: { cards },
});

export const setPopout = (popout) => ({
  type: actionType.SET_POPOUT,
  payload: { popout },
});

export const changeRoute = ({ route }) => setActivePanel(route.name);
