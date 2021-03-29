import React, { useState } from "react";
import { View, Panel, Button } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Boards from "./Boards";

const panel = {
  boards: "boards",
  columns: "columns",
};

const App = () => {
  const [activePanel, setActivePanel] = useState(panel.boards);

  return (
    <View activePanel={activePanel}>
      <Panel id={panel.boards}>
        <Boards onChangePanel={() => setActivePanel(panel.columns)} />
      </Panel>
      <Panel id={panel.columns}>
        <div>Привет,я панель с колонками</div>
        <Button onClick={() => setActivePanel(panel.boards)}>
          Перейти к доскам
        </Button>
      </Panel>
    </View>
  );
};

export default App;
