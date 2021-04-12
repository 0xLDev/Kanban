import { combineReducers } from "redux";

import app from "./app";
import boards from "./boards";
import columns from "./columns";
import cards from "./cards";

const reducer = combineReducers({
  app,
  boards,
  columns,
  cards,
});

export default reducer;
