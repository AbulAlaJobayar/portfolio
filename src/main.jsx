import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Component/Home/Home";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home></Home>
    </BrowserRouter>
  </React.StrictMode>
);
