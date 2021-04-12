import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import * as backend from "./api";
import * as router from "./router";
import App from "./app/components/App/AppContainer";
import { getStore } from "./app/store";
// // Init VK  Mini App
// bridge.send("VKWebAppInit");

// Инициализация роутера
const route = router.initialize();

// Инициализация бекенда
backend.initialize();

// Инициализация Redux
const store = getStore();

ReactDOM.render(
  <App router={route} store={store} />,
  document.getElementById("root")
);
