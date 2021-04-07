import React, { useEffect } from "react";
import { View, Panel } from "@vkontakte/vkui";
import { useRoute } from "react-router5";
import "@vkontakte/vkui/dist/vkui.css";

import Boards from "../../panels/Boards/Boards";
import Columns from "../../panels/Columns/Columns";
import { useAppState } from "./hooks";
import { pages } from "../../router";

const App = () => {
  const { activePanel, popout, changeRoute } = useAppState();
  const { route, router } = useRoute();

  useEffect(() => {
    router.subscribe(changeRoute);

    changeRoute({ route });
  }, [router]);

  if (!activePanel) {
    return null;
  }

  return (
    <>
      <View activePanel={activePanel} popout={popout}>
        <Panel id={pages.BOARDS}>
          <Boards />
        </Panel>

        <Panel id={pages.COLUMNS} className="Columns">
          <Columns />
        </Panel>
      </View>
    </>
  );
};

export default App;
