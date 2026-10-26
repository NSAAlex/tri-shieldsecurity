import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/cyber-threats">Cyber Threats</NavLink>
      <NavLink to="/solutions">Solutions</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default Navigation;