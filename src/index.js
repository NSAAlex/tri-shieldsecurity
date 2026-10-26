import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter , Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Home from './pages/home/Home';
import CyberThreats from './pages/cyber-threats/CyberThreats';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Solutions from './pages/solutions/Solutions';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cyber-threats" element={<CyberThreats />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="solutions" element={<Solutions />} />
        </Route>
      </Routes>
    </HashRouter>
  )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

