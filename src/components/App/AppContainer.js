import React from "react";
import { RouterProvider } from "react-router5";

import Context from "./context";
import { useAppState } from "./hooks";

import App from "./App";

const AppContainer = ({ router }) => {
  const state = useAppState();

  return (
    <RouterProvider router={router}>
      <Context.Provider value={state}>
        <App />
      </Context.Provider>
    </RouterProvider>
  );
};

export default AppContainer;
