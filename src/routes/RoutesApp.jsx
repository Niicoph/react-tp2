import {Routes, Route} from "react-router-dom";
import App from "../App";

export default function RoutesApp() {
  return (
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  )
}
