import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import * as backend from "./actions";
import App from "./components/App/App";

// // Init VK  Mini App
// bridge.send("VKWebAppInit");

backend.initialize();

ReactDOM.render(<App />, document.getElementById("root"));
