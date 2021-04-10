import * as actionType from "./types";
import { api } from "../api";

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

export const changeRoute = ({ route }) => setActivePanel(route.name);

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

export const fetchBoards = () => (dispatch) =>
  api
    .getBoards()
    .then((boards) => {
      dispatch({ type: "fetchBoardsSuccess" });
      dispatch(setBoards(boards));
    })
    .catch(() => dispatch({ type: "fetchBoardsFail" }));

export const deleteBoard = (id) => (dispatch) =>
  api
    .deleteBoard(id)
    .then(() => {
      dispatch({ type: "deleteBoardSuccess" });
      dispatch(removeBoard(id));
    })
    .catch(() => dispatch({ type: "deleteBoardFail" }));

export const createBoard = (name) => (dispatch) =>
  api
    .createBoard(name)
    .then((doc) => {
      dispatch({ type: "createBoardSuccess" });
      dispatch(addBoard({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: "createBoardFail" }));

export const fetchColumns = (boardId) => (dispatch, getState) => {
  const boards = getState().boards;
  const board = boards.find(({ id }) => id === boardId) || {};

  if (board.id) {
    return api
      .getColumns(board.id)
      .then((columns) => {
        dispatch({ type: "fetchColumnsSuccess" });
        dispatch(setColumns(columns));
      })
      .catch(() => dispatch({ type: "fetchColumnsFail" }));
  }
};

export const deleteColumn = (id) => (dispatch) =>
  api
    .deleteColumn(id)
    .then(() => {
      dispatch({ type: "deleteColumnSuccess" });
      dispatch(removeColumn(id));
    })
    .catch(() => dispatch({ type: "deleteColumnFail" }));

export const fetchCards = (columnId) => (dispatch) =>
  api
    .getCards(columnId)
    .then((cards) => {
      dispatch({ type: "fetchCardsSuccess" });
      dispatch(setCards(cards));
    })
    .catch(() => dispatch({ type: "fetchCardsFail" }));

export const deleteCard = (id) => (dispatch) =>
  api
    .deleteCard(id)
    .then(() => {
      dispatch({ type: "deleteCardSuccess" });
      dispatch(removeCard(id));
    })
    .catch(() => dispatch({ type: "deleteCardFail" }));

export const createColumn = (name, id) => (dispatch) =>
  api
    .createColumn(name, id)
    .then((doc) => {
      dispatch({ type: "createColumnSuccess" });
      dispatch(addColumn({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: "createColumnFail" }));

export const createCard = (name, id) => (dispatch) =>
  api
    .createCard(name, id)
    .then((doc) => {
      dispatch({ type: "createCardSuccess" });
      dispatch(addCards({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: "createCardFail" }));
