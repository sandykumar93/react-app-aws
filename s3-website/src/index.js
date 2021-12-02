/* IMPORTS */
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import "antd/dist/antd.css";

/* CODE */
ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
