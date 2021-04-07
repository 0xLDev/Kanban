import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import * as backend from "./actions";
import * as router from "./router";
import App from "./components/App/AppContainer";

// // Init VK  Mini App
// bridge.send("VKWebAppInit");

// Инициализация роутера
const route = router.initialize();

// Инициализация бекенда
backend.initialize();

ReactDOM.render(<App router={route} />, document.getElementById("root"));
