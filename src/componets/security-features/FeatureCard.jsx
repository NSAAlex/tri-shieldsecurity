
function FeatureCard({ number, icon: Icon, title, description }) {
  return (
    <article className="feature">
      <span className="feature-icon">
        <Icon />
      </span>
      <div>
        <span className="feature-number">{number}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default FeatureCard;
