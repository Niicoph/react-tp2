import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Home from "../Pages/Home";
import SkinDetails from "../Pages/SkinDetails";
import Favorites from "../Pages/Favorites";
import NotFound from "../Pages/NotFound";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.skinsId} element={<SkinDetails />} />
      <Route path={routes.favorites} element={<Favorites />} />
      <Route path={routes.notFound} element={<NotFound />} />
    </Routes>
  );
}
