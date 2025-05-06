import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import './i18n/i18n';
import RoutesApp from "./Routes/RoutesApp.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RoutesApp />
  </BrowserRouter>
);
