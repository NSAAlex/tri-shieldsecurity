
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navigation.css";

const links = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "About", path: "/about" },
  { title: "Cyber Threats", path: "/cyber-threats" },
  { title: "Solutions", path: "/solutions" },
  { title: "Contact", path: "/contact" }
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-wrapper">
      {/* PART 10: JavaScript mobile toggle menu */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <nav
        id="primary-navigation"
        className={`main-nav ${menuOpen ? "menu-open" : ""}`}
      >
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            onClick={() => setMenuOpen(false)}
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Navigation;
