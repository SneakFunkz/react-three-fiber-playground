import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globalStyles.css";
import App from "./pages/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GsapScrollDodecaApp from "./pages/gsap-scroll-dodeca/gsap-scroll-dodeca";
import ExoApeAnimation from "./pages/exoApeSim/ExoApeAnimation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path={"/gsap-scroll-zoom-r3f"} element={<GsapScrollDodecaApp />} />
      <Route path={"/exoApeAnimation"} element={<ExoApeAnimation />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
