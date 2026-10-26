import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "./images/shield.png";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Cyber Threats", path: "/cyber-threats" },
  { name: "Solutions", path: "/solutions" },
  { name: "Contact", path: "/contact" }
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <Link to="/" className="footer-brand">
            <img src={logo} alt="TRI-Shield Security logo" />

            <span>
              TRI-<span className="accent">Shield</span>
              <br />
              Security
            </span>
          </Link>

          <div className="footer-links">
            <h3>Quick Links</h3>

            {footerLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Tri-Shield Security. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;