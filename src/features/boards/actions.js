import * as actionType from "./types";
import { api } from "../../api";

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

export const replaceBoard = (id, name) => ({
  type: actionType.REPLACE_BOARD,
  payload: { id, name },
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

export const editBoard = (id, name) => (dispatch) =>
  api
    .editBoard(id, name)
    .then(() => {
      dispatch({ type: "editBoardSuccess" });
      dispatch(replaceBoard(id, name));
    })
    .catch(() => dispatch({ type: "editBoardFail" }));
