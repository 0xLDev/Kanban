import * as actionType from "./types";
import { api } from "../../api";

const setCard = ({ id, name, text }) => ({
  type: actionType.SET_CARD,
  payload: { id, name, text },
});

const replaceCard = (id, data = {}) => ({
  type: actionType.REPLACE_CARD,
  payload: data,
});

const removeCard = () => ({
  type: actionType.REMOVE_CARD,
});

export const fetchCard = (cardId) => (dispatch) =>
  api
    .getCard(cardId)
    .then((card) => {
      dispatch({ type: "fetchCardSuccess" });
      dispatch(setCard(card));
    })
    .catch(() => dispatch({ type: "fetchCardFail" }));

export const editCard = (id, data) => (dispatch) =>
  api
    .editCard(id, data)
    .then(() => {
      dispatch({ type: "editCardSuccess" });
      dispatch(replaceCard(id, data));
    })
    .catch(() => dispatch({ type: "editCardFail" }));

export const deleteCard = (id) => (dispatch) =>
  api
    .deleteCard(id)
    .then(() => {
      dispatch({ type: "deleteCardSuccess" });
      dispatch(removeCard());
    })
    .catch(() => dispatch({ type: "deleteCardFail" }));
