import * as actionType from "./types";
import { api } from "../../api";
import { getBoards } from "../boards/selectors";
import { fetchBoards } from "../boards/actions";

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

export const replaceColumn = (id, name) => ({
  type: actionType.REPLACE_COLUMN,
  payload: { id, name },
});

export const fetchColumns = (boardId) => (dispatch, getState) => {
  const boards = getBoards(getState());
  const board = boards.find(({ id }) => id === boardId) || {};

  // Может быть зацикливание, если ввести несуществующий boardId
  if (!board.id) {
    return dispatch(fetchBoards()).then(() => dispatch(fetchColumns(boardId)));
  }

  return api
    .getColumns(board.id)
    .then((columns) => {
      dispatch({ type: "fetchColumnsSuccess" });
      dispatch(setColumns(columns));
    })
    .catch(() => dispatch({ type: "fetchColumnsFail" }));
};

export const createColumn = (name, id) => (dispatch) =>
  api
    .createColumn(name, id)
    .then((doc) => {
      dispatch({ type: "createColumnSuccess" });
      dispatch(addColumn({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: "createColumnFail" }));

export const deleteColumn = (id) => (dispatch) =>
  api
    .deleteColumn(id)
    .then(() => {
      dispatch({ type: "deleteColumnSuccess" });
      dispatch(removeColumn(id));
    })
    .catch(() => dispatch({ type: "deleteColumnFail" }));

export const editColumn = (id, name) => (dispatch) =>
  api
    .editColumn(id, name)
    .then(() => {
      dispatch({ type: "editColumnSuccess" });
      dispatch(replaceColumn(id, name));
    })
    .catch(() => dispatch({ type: "editColumnFail" }));
