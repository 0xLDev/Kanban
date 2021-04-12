import * as actionType from "./types";

export const setActivePanel = (panel) => ({
  type: actionType.SET_ACTIVE_PANEL,
  payload: { panel },
});

export const changeRoute = ({ route }) => setActivePanel(route.name);

export const setPopout = (popout) => ({
  type: actionType.SET_POPOUT,
  payload: { popout },
});
