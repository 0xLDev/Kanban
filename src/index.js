import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import * as backend from "./api";
import * as router from "./router";
import App from "./components/App/AppContainer";
import { reducer } from "./reducers/reducer";
// // Init VK  Mini App
// bridge.send("VKWebAppInit");

// Инициализация роутера
const route = router.initialize();

// Инициализация бекенда
backend.initialize();

// Инициализация Redux
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <App router={route} store={store} />,
  document.getElementById("root")
);
