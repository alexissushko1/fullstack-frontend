import React from "react";
import ReactDOM from "react-dom/client";
// import index
import App from "./app/App";

import store from "./app/store";
import { Provider } from "react-redux";

import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
