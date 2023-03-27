import React from "react";
import ReactDOM from "react-dom/client";
import { RootContext } from "./context";
import 'antd/dist/reset.css';
import "./index.css";
import { Root } from "./root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RootContext>
    <Root />
  </RootContext>
);
