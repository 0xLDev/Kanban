import { createStore, applyMiddleware } from "redux";
import { reducer } from "../reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const getStore = () => {
  const middleware = (store) => (next) => (action) => {
    return next(action);
  };

  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk, middleware))
  );
};
