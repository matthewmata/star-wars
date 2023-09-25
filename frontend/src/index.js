import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./sass/styles.scss";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
