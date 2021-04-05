import React from "react";
import { View, Panel } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Boards from "../../panels/Boards/Boards";
import Columns from "../../panels/Columns/Columns";
import { panel } from "./constance";
import Context from "./context";
import { useAppState } from "./hooks";

const App = () => {
  const state = useAppState();
  return (
    <Context.Provider value={state}>
      <View activePanel={state.activePanel}>
        <Panel id={panel.boards}>
          <Boards />
        </Panel>

        <Panel id={panel.columns} className="Columns">
          {state.activeBoard && <Columns />}
        </Panel>
      </View>
    </Context.Provider>
  );
};

export default App;
