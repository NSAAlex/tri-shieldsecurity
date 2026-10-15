
import "./Header.css";
import logo from "./images/shield.png";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <a className="header-logo" href="/">
          <img src={logo} alt="Tri-Shield Security logo" />

          <span className="logo-text">
            <span className="logo-name">
              TRI-<span className="logo-highlight">Shield</span>
            </span>
            <span className="logo-subtitle">Security</span>
          </span>
        </a>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
