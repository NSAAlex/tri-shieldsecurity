import { Link } from "react-router-dom";
import "./Hero.css";

function Hero({
  label,
  title,
  highlight,
  description,
  image,
  imageAlt,
  primaryText = "Get Started",
  primaryLink = "/contact",
  secondaryText = "Learn More",
  secondaryLink = "/services"
}) {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="section-label">{label}</p>

          <h1>
            {title}
            <br />
            <span className="accent">{highlight}</span>
          </h1>

          <p className="hero-description">{description}</p>

          <div className="button-group">
            <Link to={primaryLink} className="btn btn-primary">
              {primaryText}
            </Link>

            <Link to={secondaryLink} className="btn btn-outline">
              {secondaryText}
            </Link>
          </div>
        </div>

        {image && (
          <div className="hero-image">
            <img src={image} alt={imageAlt || title} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;