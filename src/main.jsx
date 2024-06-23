import App from "./App.jsx";
import "./Index.css";
import store from "./redux/storeConfig.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
