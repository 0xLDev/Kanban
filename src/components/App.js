import React, { useState } from "react";
import { View, Panel, Button } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Boards from "./Boards";
import Columns from './Columns'

const panel = {
  boards: "boards",
  columns: "columns",
};

const App = () => {
  const [activePanel, setActivePanel] = useState(panel.columns);

  return (
    <View activePanel={activePanel}>
      <Panel id={panel.boards}>
        <Boards onChangePanel={() => setActivePanel(panel.columns)} />
      </Panel>

      <Panel id={panel.columns} className='Columns'>
        <Columns />
      </Panel>

    </View>
  );
};

export default App;
