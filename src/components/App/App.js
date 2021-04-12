import React, { useEffect } from "react";
import { View, Panel } from "@vkontakte/vkui";
import { useRoute } from "react-router5";
import { useSelector, useDispatch } from "react-redux";
import "@vkontakte/vkui/dist/vkui.css";

import Boards from "../../panels/Boards/Boards";
import Columns from "../../panels/Columns/Columns";
import { pages } from "../../router";
import { changeRoute } from "../../actions";
import { getActivePanel, getPopout } from "../../selectors";

const App = () => {
  const dispatch = useDispatch();
  const activePanel = useSelector(getActivePanel);
  const popout = useSelector(getPopout);
  const { route, router } = useRoute();

  useEffect(() => {
    router.subscribe((...args) => dispatch(changeRoute(...args)));

    dispatch(changeRoute({ route }));
  }, [dispatch]);

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
