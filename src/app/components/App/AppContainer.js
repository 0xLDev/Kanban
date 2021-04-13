import React, { memo } from "react";
import { RouterProvider } from "react-router5";
import { Provider } from "react-redux";
import App from "./App";

const AppContainer = ({ router, store }) => {
  return (
    <RouterProvider router={router}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
  );
};

export default memo(AppContainer);
