import * as actionType from "./types";
import { api } from "../../api";

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

export const createCard = (name, id) => (dispatch) =>
  api
    .createCard(name, id)
    .then((doc) => {
      dispatch({ type: "createCardSuccess" });
      dispatch(addCards({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: "createCardFail" }));
