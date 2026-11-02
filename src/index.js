
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Layout from "./Layout";

import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import CyberThreats from "./pages/cyber-threats/CyberThreats";
import Solutions from "./pages/solutions/Solutions";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="cyber-threats" element={<CyberThreats />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


