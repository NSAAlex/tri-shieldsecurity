
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <a className="active" href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/about">About</a>
      <a href="/cyber-threats">Cyber Threats</a>
      <a href="/solutions">Solutions</a>
      <a href="/contact">Contact</a>
    </nav>
  );
};

export default Navigation;
