import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import app from "../app/reducer";
import boards from "../features/boards/reducer";
import columns from "../features/columns/reducer";
import cards from "../features/cards/reducer";

const reducer = combineReducers({
  app,
  boards,
  columns,
  cards,
});

export const getStore = () => {
  const middleware = (store) => (next) => (action) => {
    return next(action);
  };

  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk, middleware))
  );
};
