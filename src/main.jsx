import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import "./index.css";
import './i18n/i18n';
import RoutesApp from "./routes/RoutesApp.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RoutesApp />
  </BrowserRouter>
);
