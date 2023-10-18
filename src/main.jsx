import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import store from './Redux/store';

ReactDOM.createRoot(document.getElementById("root")).render(
  // iska use karne se hamara store har jagah activate ho gaya hai we can use everything..
  <Provider store = {store}>    
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </Provider>
);
