import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

import "./App.css"; // Import styles
import Portfolio from "./Portfolio";
;

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Portfolio/>
  </BrowserRouter>
);
